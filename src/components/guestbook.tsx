'use client';

import { useState } from 'react';
import {
    GRADIENT,
    SIGNATURES,
    type Signature,
    type Vibe,
} from '@/data/guestbook';
import { button } from '@/lib/button';
import { t } from '@/lib/t';

const field = t({
    size: 'min-h-11 w-full px-3.5',
    shape: 'rounded-xl border border-line bg-bg squircle',
    font: 'text-md text-fg',
});

/** Relays a note through `/hello` (see src/app/hello/route.ts). */
const sendNote = (note: string) =>
    fetch('/hello', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ note }),
    })
        .then((res) => res.ok)
        .catch(() => false);

const AXES = [
    { key: 'fill', label: 'Solid or gradient', options: ['solid', 'gradient'] },
    {
        key: 'corner',
        label: 'Sharp or rounded corners',
        options: ['sharp', 'rounded'],
    },
    { key: 'type', label: 'Sans or serif', options: ['sans', 'serif'] },
] as const;

export default function Guestbook() {
    const [vibe, setVibe] = useState<Vibe>({
        fill: 'solid',
        corner: 'rounded',
        type: 'sans',
    });
    const [name, setName] = useState('');
    const [signed, setSigned] = useState<Signature | null>(null);
    const [failed, setFailed] = useState(false);

    const sign = async () => {
        const signature = { name: name.trim() || 'anonymous', ...vibe };
        setFailed(false);
        if (await sendNote(`Guestbook: ${JSON.stringify(signature)}`)) {
            setSigned(signature);
        } else {
            setFailed(true);
        }
    };

    return (
        <section className="flex flex-col gap-3.5">
            <p className="text-sm text-muted">
                {SIGNATURES.length + (signed ? 1 : 0)} signed
            </p>
            <ul className="flex flex-wrap gap-2">
                {signed && (
                    <li>
                        <Pill {...signed} mine />
                    </li>
                )}
                {SIGNATURES.map((signature, i) => (
                    <li key={i}>
                        <Pill {...signature} />
                    </li>
                ))}
            </ul>
            {signed && (
                <p className="text-sm text-muted">
                    Thanks, {signed.name}! The outlined pill is a preview;
                    you’ll be added for real once I check the list.
                </p>
            )}
            {/* Swapped for the thanks above once signed */}
            {!signed && (
                <div
                    className={t({
                        layout: 'flex flex-col gap-3.5 p-4',
                        shape: 'rounded-2xl border border-line bg-bg squircle',
                    })}
                >
                    <p className="text-sm text-muted">Sign my guestbook</p>
                    <div className="flex flex-wrap gap-2">
                        {AXES.map((axis) => (
                            <div
                                key={axis.key}
                                role="group"
                                aria-label={axis.label}
                                className="inline-flex gap-0.5 rounded-xl bg-surface p-0.75 squircle max-sm:flex max-sm:basis-full"
                            >
                                {axis.options.map((option) => {
                                    const on = vibe[axis.key] === option;
                                    return (
                                        <button
                                            key={option}
                                            aria-pressed={on}
                                            onClick={() =>
                                                setVibe({
                                                    ...vibe,
                                                    [axis.key]: option,
                                                })
                                            }
                                            className={t({
                                                layout: 'inline-flex min-h-10 cursor-pointer items-center gap-1.5 rounded-lg px-2.5 squircle max-sm:flex-1 max-sm:justify-center',
                                                font: 'text-sm capitalize',
                                                color: on
                                                    ? 'bg-bg text-fg shadow-[0_1px_2px_rgb(17_17_17/0.08),0_0_0_1px_var(--color-line)]'
                                                    : 'text-faint hover:text-fg',
                                                motion: 'transition-colors duration-160 ease-(--ease-out)',
                                            })}
                                        >
                                            <Swatch option={option} />
                                            {option}
                                        </button>
                                    );
                                })}
                            </div>
                        ))}
                    </div>
                    <label htmlFor="nickname" className="text-sm text-muted">
                        Nickname
                    </label>
                    <input
                        id="nickname"
                        type="text"
                        maxLength={16}
                        placeholder="Up to 16 characters"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className={field}
                    />
                    <div className="flex flex-col gap-2">
                        <p className="text-sm text-muted">Preview</p>
                        <div>
                            <Pill name={name.trim() || 'nickname'} {...vibe} />
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <button className={button('solid')} onClick={sign}>
                            Sign
                        </button>
                    </div>
                    {failed && (
                        <p role="alert" className="text-sm text-muted">
                            Couldn’t sign just now. Try again in a bit?
                        </p>
                    )}
                </div>
            )}
        </section>
    );
}

function Pill({
    name,
    fill,
    corner,
    type,
    mine,
}: Signature & { mine?: boolean }) {
    return (
        <span
            style={{ background: fill === 'gradient' ? GRADIENT : undefined }}
            className={t({
                layout: 'inline-flex min-h-9 max-w-full items-center px-3.5',
                fill: 'bg-sun text-ink',
                corner:
                    corner === 'sharp' ? 'rounded-none' : 'rounded-xl squircle',
                font:
                    type === 'serif'
                        ? 'font-serif text-lg leading-normal'
                        : 'text-md leading-normal',
                mine: mine
                    ? 'shadow-[0_0_0_2px_var(--color-bg),0_0_0_3.5px_var(--color-sun-ring)]'
                    : '',
            })}
        >
            {/* Nicknames are capped at 16 characters, so this only truncates on
                very narrow screens. The pill's line height leaves room for
                descenders, which truncate would otherwise clip. */}
            <span className="min-w-0 truncate">{name}</span>
        </span>
    );
}

function Swatch({ option }: { option: string }) {
    if (option === 'sans' || option === 'serif') {
        return (
            <span
                aria-hidden="true"
                className={
                    option === 'serif'
                        ? 'font-serif text-lg leading-none'
                        : 'text-sm leading-none font-semibold'
                }
            >
                Aa
            </span>
        );
    }
    return (
        <span
            aria-hidden="true"
            style={{ background: option === 'gradient' ? GRADIENT : undefined }}
            className={t({
                size: 'inline-block size-3.25 flex-none',
                look: {
                    solid: 'bg-sun',
                    gradient: '',
                    sharp: 'border border-current',
                    rounded: 'rounded-sm border border-current',
                }[option]!,
            })}
        />
    );
}
