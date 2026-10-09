import { instructions } from '@/lib/guestbook';

export const dynamic = 'force-dynamic';

export const GET = (request: Request) => {
    const { origin } = new URL(request.url);
    const body = [
        '# Opey Adeyemi',
        '',
        '> Personal portfolio: a selection of thoughts and work.',
        '',
        '## Leave a note',
        '',
        instructions(origin).split('\n').slice(2).join('\n'),
        '',
    ].join('\n');
    return new Response(body, {
        headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    });
};
