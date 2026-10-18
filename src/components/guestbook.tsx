'use client';

import { useState } from 'react';
import {
    GRADIENT,
    SIGNATURES,
    type Signature,
    type Vibe,
} from '@/data/guestbook';
import { t } from '@/lib/t';

const field = t({
    size: 'min-h-11 w-full px-3.5',
    shape: 'border border-line bg-bg',
    font: 'text-[0.9375rem] font-normal text-fg',
});

const button = (primary = false) =>
    t({
        size: 'min-h-11 cursor-pointer px-[18px]',
        shape: 'border',
        font: 'text-[0.9375rem] font-semibold',
        color: primary
            ? 'border-fg bg-fg text-bg'
            : 'border-line bg-bg text-fg',
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
    const [composing, setComposing] = useState(false);
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
            setComposing(false);
            setName('');
        } else {
            setFailed(true);
        }
    };

    return (
        <section className="flex flex-col gap-3.5">
            <div className="flex items-center justify-between gap-3">
                <p className="text-[0.875rem] leading-[1.5] font-medium text-muted">
                    {SIGNATURES.length + (signed ? 1 : 0)} signed
                </p>
                <button
                    onClick={() => setComposing(!composing)}
                    aria-expanded={composing}
                    className={t({
                        layout: 'inline-flex cursor-pointer items-center px-2.5',
                        shape: 'border border-line bg-bg',
                        font: 'text-[0.875rem] leading-[1.7]',
                        hover: 'transition-colors duration-160 ease-(--ease-out) hover:border-line-strong hover:bg-surface-2',
                    })}
                >
                    Pick yours
                </button>
            </div>
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
                <p className="text-[0.875rem] font-normal text-muted">
                    Thanks, {signed.name}! The outlined pill is a preview;
                    you’ll be added for real once I check the list.
                </p>
            )}
            {composing && (
                <div
                    className={t({
                        layout: 'flex flex-col gap-3.5 p-4',
                        shape: 'border border-line bg-bg',
                        font: 'leading-[1.4] font-normal',
                    })}
                >
                    <p className="text-[0.875rem] text-muted">
                        What’s your vibe?
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {AXES.map((axis) => (
                            <div
                                key={axis.key}
                                role="group"
                                aria-label={axis.label}
                                className="inline-flex gap-0.5 bg-surface p-[3px] max-sm:flex max-sm:basis-full"
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
                                                layout: 'inline-flex min-h-10 cursor-pointer items-center gap-1.5 px-2.5 max-sm:flex-1 max-sm:justify-center',
                                                font: 'text-[0.875rem] capitalize',
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
                    <label
                        htmlFor="nickname"
                        className="text-[0.875rem] text-muted"
                    >
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
                    <div className="flex flex-wrap items-center justify-between gap-3">
                        <Pill name={name.trim() || 'nickname'} {...vibe} mine />
                        <span className="flex gap-2">
                            <button
                                className={button()}
                                onClick={() => setComposing(false)}
                            >
                                Cancel
                            </button>
                            <button className={button(true)} onClick={sign}>
                                Sign
                            </button>
                        </span>
                    </div>
                    {failed && (
                        <p role="alert" className="text-[0.875rem] text-muted">
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
                corner: corner === 'sharp' ? 'rounded-none' : 'rounded-full',
                font:
                    type === 'serif'
                        ? 'font-serif text-[1.125rem] leading-none font-normal'
                        : 'text-[0.9375rem] leading-none font-medium',
                mine: mine
                    ? 'shadow-[0_0_0_2px_var(--color-bg),0_0_0_3.5px_var(--color-sun-ring)]'
                    : '',
            })}
        >
            <span className="max-w-[16ch] truncate">{name}</span>
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
                        ? 'font-serif text-[1.0625rem] leading-none'
                        : 'text-[0.875rem] leading-none font-semibold'
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
                size: 'inline-block size-[13px] flex-none',
                look: {
                    solid: 'bg-sun',
                    gradient: '',
                    sharp: 'border-[1.5px] border-current',
                    rounded: 'rounded-[5px] border-[1.5px] border-current',
                }[option]!,
            })}
        />
    );
}
