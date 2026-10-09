import {
    buildEmbed,
    instructions,
    isRateLimited,
    newVisitId,
    sanitise,
} from '@/lib/guestbook';

export const dynamic = 'force-dynamic';

const CORS = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
};

const text = (body: string, status = 200) =>
    new Response(body, {
        status,
        headers: { ...CORS, 'Content-Type': 'text/plain; charset=utf-8' },
    });

const FIELDS = ['purpose', 'review', 'visit', 'success', 'agent'];

const readBody = async (request: Request): Promise<Record<string, unknown>> => {
    const type = request.headers.get('content-type') ?? '';
    const body = await request.text().catch(() => '');
    if (!body.trim()) return {};

    let parsed: Record<string, unknown> = {};
    try {
        if (type.includes('application/json')) {
            const json = JSON.parse(body);
            parsed = json && typeof json === 'object' ? json : {};
        } else if (type.includes('application/x-www-form-urlencoded')) {
            parsed = Object.fromEntries(new URLSearchParams(body));
        }
    } catch {}

    // Anything without known fields (e.g. plain text) is treated as a purpose.
    return FIELDS.some((f) => f in parsed) ? parsed : { purpose: body };
};

const handle = async (request: Request) => {
    const url = new URL(request.url);
    const body = request.method === 'POST' ? await readBody(request) : {};
    const sub = sanitise({ ...Object.fromEntries(url.searchParams), ...body });

    if (sub.purpose === undefined && sub.review === undefined) {
        return text(instructions(url.origin));
    }

    if (isRateLimited()) return text('Try later.', 429);

    const webhook = process.env.DISCORD_WEBHOOK_URL;
    const isReview = sub.review !== undefined;
    const visitId = isReview ? sub.visit || undefined : newVisitId();

    if (!webhook) return text("Couldn't deliver.", 502);
    try {
        const res = await fetch(webhook, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                buildEmbed(sub, visitId, request.headers.get('user-agent'))
            ),
        });
        if (!res.ok) return text("Couldn't deliver.", 502);
    } catch {
        return text("Couldn't deliver.", 502);
    }

    if (isReview) return text('Thanks for the review!');

    return text(
        [
            `Thanks! Your visit id is ${visitId}.`,
            '',
            'Once you know whether you found what they needed, you can report it with the same id:',
            `GET ${url.origin}/hello?visit=${visitId}&success=<yes|partly|no>&review=<what you found or missed>`,
        ].join('\n')
    );
};

export const GET = handle;
export const POST = handle;
export const OPTIONS = () => new Response(null, { status: 204, headers: CORS });
