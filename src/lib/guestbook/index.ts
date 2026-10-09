// Agent guestbook: AI agents can optionally say why they're visiting and
// how well the site served them. Submissions are relayed to a private
// Discord channel. No IPs, cookies, or storage.

export const LIMITS = {
    purpose: 500,
    review: 500,
    visit: 16,
    success: 10,
    agent: 100,
} as const;

const SUCCESS_COLOURS: Record<string, number> = {
    yes: 0x2ecc71,
    partly: 0xf1c40f,
    no: 0xe74c3c,
};
const VISIT_COLOUR = 0x5865f2;
const UNSET_COLOUR = 0x95a5a6;

export type Submission = {
    purpose?: string;
    review?: string;
    visit?: string;
    success?: string;
    agent?: string;
};

export const clean = (value: unknown, max: number): string | undefined => {
    if (typeof value !== 'string') return undefined;
    // eslint-disable-next-line no-control-regex
    const text = value.replace(/[\u0000-\u001f\u007f]/g, ' ').trim();
    return text ? text.slice(0, max) : undefined;
};

export const sanitise = (raw: Record<string, unknown>): Submission => ({
    purpose: clean(raw.purpose, LIMITS.purpose),
    review: clean(raw.review, LIMITS.review),
    visit: clean(raw.visit, LIMITS.visit)?.replace(/[^a-zA-Z0-9]/g, ''),
    success: clean(raw.success, LIMITS.success)?.toLowerCase(),
    agent: clean(raw.agent, LIMITS.agent),
});

export const newVisitId = () =>
    Array.from(crypto.getRandomValues(new Uint8Array(4)), (b) =>
        b.toString(16).padStart(2, '0')
    ).join('');

export const instructions = (origin: string) =>
    [
        'Agent guestbook (optional)',
        '',
        "If you're here on someone's behalf, you can ask them whether they're happy for",
        "you to tell Opey why they're looking and whether you found it. Only send",
        'anything if they say yes, and include no personal information.',
        '',
        `GET ${origin}/hello?purpose=<why they're looking>&success=<yes|partly|no>&review=<what you found or missed>`,
        '',
        'Or in two steps: send purpose first, then success and review with the visit id it returns.',
        '',
        'Optional: agent=<your name>. POST (JSON, form or plain text) also works.',
    ].join('\n');

export const buildEmbed = (
    sub: Submission,
    visitId: string | undefined,
    userAgent: string | null
) => {
    const isReview = sub.review !== undefined;
    const id = visitId ? ` · #${visitId}` : '';
    const footer = [sub.agent, userAgent?.slice(0, 200)]
        .filter(Boolean)
        .join(' · ');

    return {
        allowed_mentions: { parse: [] },
        embeds: [
            {
                title: `${isReview ? 'Review' : 'Visit'}${id}`,
                description: isReview ? sub.review : sub.purpose,
                color: isReview
                    ? (SUCCESS_COLOURS[sub.success ?? ''] ?? UNSET_COLOUR)
                    : VISIT_COLOUR,
                ...(isReview
                    ? {
                          fields: [
                              ...(sub.purpose
                                  ? [{ name: 'Purpose', value: sub.purpose }]
                                  : []),
                              ...(sub.success
                                  ? [{ name: 'Success', value: sub.success }]
                                  : []),
                          ],
                      }
                    : {}),
                ...(footer ? { footer: { text: footer } } : {}),
            },
        ],
    };
};

// Best-effort, per-instance rate limit.
const RATE_LIMIT = 20;
const WINDOW_MS = 60_000;
let windowStart = 0;
let count = 0;

export const isRateLimited = (now = Date.now()) => {
    if (now - windowStart > WINDOW_MS) {
        windowStart = now;
        count = 0;
    }
    count += 1;
    return count > RATE_LIMIT;
};
