'use client';

import { useState } from 'react';
import { t } from '@/lib/t';

export const field = t({
    size: 'min-h-11 w-full px-3.5',
    shape: 'border border-line bg-bg',
    font: 'text-[0.9375rem] font-normal text-fg',
});

export const button = (primary = false) =>
    t({
        size: 'min-h-11 cursor-pointer px-[18px]',
        shape: 'border',
        font: 'text-[0.9375rem] font-semibold',
        color: primary
            ? 'border-fg bg-fg text-bg'
            : 'border-line bg-bg text-fg',
    });

/** Relays a note through `/hello` (see src/app/hello/route.ts). */
export const sendNote = (note: string) =>
    fetch('/hello', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ note }),
    })
        .then((res) => res.ok)
        .catch(() => false);

export default function NoteForm() {
    const [note, setNote] = useState('');
    const [status, setStatus] = useState<
        'idle' | 'sending' | 'sent' | 'failed'
    >('idle');

    if (status === 'sent') {
        return <p className="text-[0.875rem] text-muted">Thanks, got it.</p>;
    }

    return (
        <form
            className="flex w-full flex-wrap gap-2"
            onSubmit={async (e) => {
                e.preventDefault();
                if (!note.trim()) return;
                setStatus('sending');
                setStatus((await sendNote(note)) ? 'sent' : 'failed');
            }}
        >
            <label htmlFor="note" className="sr-only">
                Leave a note
            </label>
            <input
                id="note"
                type="text"
                maxLength={280}
                placeholder="Leave a note, no name needed"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className={`${field} min-w-0 flex-[1_1_220px]`}
            />
            <button
                type="submit"
                disabled={status === 'sending'}
                className={button(true)}
            >
                Send
            </button>
            {status === 'failed' && (
                <p role="alert" className="w-full text-[0.875rem] text-muted">
                    Couldn’t send that. Try again in a bit?
                </p>
            )}
        </form>
    );
}
