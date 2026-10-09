// Relays short notes left by visitors (usually via an AI agent) to a private
// Discord channel. No IPs, cookies, or storage.

export const dynamic = 'force-dynamic';

const MAX_LENGTH = 500;
const RATE_LIMIT = 20; // per minute, best-effort per instance

let windowStart = 0;
let count = 0;

const text = (body: string, status = 200) =>
    new Response(body, {
        status,
        headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    });

const readNote = async (request: Request): Promise<string | undefined> => {
    let note: unknown = new URL(request.url).searchParams.get('note');
    if (request.method === 'POST') {
        note = await request
            .json()
            .then((body) => body?.note)
            .catch(() => note);
    }
    if (typeof note !== 'string') return undefined;
    // eslint-disable-next-line no-control-regex
    const cleaned = note.replace(/[\u0000-\u001f\u007f]/g, ' ').trim();
    return cleaned ? cleaned.slice(0, MAX_LENGTH) : undefined;
};

const isRateLimited = (now = Date.now()) => {
    if (now - windowStart > 60_000) {
        windowStart = now;
        count = 0;
    }
    return ++count > RATE_LIMIT;
};

const handle = async (request: Request) => {
    const note = await readNote(request);
    if (!note) {
        return text(
            'Leave me a note: tell me what you were looking for and whether you found it.\n' +
                'Notes are only sent if you write or approve them. No name or email needed.\n\n' +
                'POST /hello with {"note": "..."} (or GET /hello?note=...)'
        );
    }
    if (isRateLimited()) return text('Try later.', 429);

    const webhook = process.env.DISCORD_WEBHOOK_URL;
    if (!webhook) return text("Couldn't deliver.", 502);

    const userAgent = request.headers.get('user-agent')?.slice(0, 200);
    const res = await fetch(webhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            allowed_mentions: { parse: [] },
            embeds: [
                {
                    description: note,
                    ...(userAgent ? { footer: { text: userAgent } } : {}),
                },
            ],
        }),
    }).catch(() => undefined);

    return res?.ok ? text('Thanks, sent!') : text("Couldn't deliver.", 502);
};

export const GET = handle;
export const POST = handle;
