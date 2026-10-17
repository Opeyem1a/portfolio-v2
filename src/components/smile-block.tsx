'use client';

import { useEffect, useRef } from 'react';
import { t } from '@/lib/t';

const clamp = (value: number) => Math.min(Math.max(value, 0), 1);

// How long the cursor must be still before the smile wanders off on its own.
const IDLE_MS = 2500;

// Soft edges so the block bleeds into the page instead of ending on a line.
const FADE = '1.5rem';
const fadeMask = [
    `linear-gradient(to right, transparent, #000 ${FADE}, #000 calc(100% - ${FADE}), transparent)`,
    `linear-gradient(to bottom, transparent, #000 ${FADE}, #000 calc(100% - ${FADE}), transparent)`,
].join(', ');

// The smile drifts towards the cursor. When the cursor is still, or there is
// none (touch screens), it wanders slowly on its own. --x and --y place it
// within the block's free space (0 = start, 1 = end).
export default function SmileBlock() {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const place = (x: number, y: number) => {
            el.style.setProperty('--x', `${clamp(x)}`);
            el.style.setProperty('--y', `${clamp(y)}`);
        };

        let lastMove = -Infinity;
        const onMouseMove = (e: MouseEvent) => {
            lastMove = performance.now();
            const rect = el.getBoundingClientRect();
            place(
                (e.clientX - (rect.left + rect.width / 2)) / innerWidth + 0.5,
                (e.clientY - (rect.top + rect.height / 2)) / innerHeight + 0.5
            );
        };

        // A slow, never-repeating loop; the translate transition smooths the
        // hand-off between following the cursor and wandering.
        let frame = 0;
        const wander = (now: number) => {
            if (now - lastMove > IDLE_MS) {
                place(
                    0.5 + 0.5 * Math.sin(now / 3100),
                    0.5 + 0.5 * Math.sin(now / 4700 + 1)
                );
            }
            frame = requestAnimationFrame(wander);
        };
        if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
            frame = requestAnimationFrame(wander);
        }

        window.addEventListener('mousemove', onMouseMove, { passive: true });
        return () => {
            cancelAnimationFrame(frame);
            window.removeEventListener('mousemove', onMouseMove);
        };
    }, []);

    return (
        <div
            ref={ref}
            aria-hidden="true"
            style={{
                maskImage: fadeMask,
                maskComposite: 'intersect',
            }}
            className={t({
                shape: 'h-48 bg-sun p-[clamp(1.75rem,5vw,2.5rem)] max-sm:h-40',
                // Container units let the smile translate across the free space
                container: '[container-type:size]',
                start: '[--x:0.5] [--y:calc(1/11)]',
            })}
        >
            <svg
                viewBox="0 0 1000 1000"
                fill="none"
                className={t({
                    size: 'size-24 text-ink max-sm:size-20',
                    position:
                        'translate-x-[calc(var(--x)*(100cqw-100%))] translate-y-[calc(var(--y)*(100cqh-100%))]',
                    transition:
                        'transition-[translate] duration-600 ease-out motion-reduce:transition-none',
                })}
            >
                <path
                    d="M1000 500C1000 565.661 987.067 630.679 961.94 691.342C936.812 752.005 899.983 807.124 853.553 853.553C807.124 899.983 752.004 936.812 691.342 961.94C630.679 987.067 565.661 1000 500 1000C434.339 1000 369.321 987.067 308.658 961.94C247.995 936.812 192.876 899.983 146.447 853.553C100.017 807.124 63.1876 752.005 38.0602 691.342C12.9329 630.679 -5.74026e-06 565.661 0 500L160 500C160 544.649 168.794 588.862 185.881 630.112C202.968 671.363 228.012 708.844 259.584 740.416C291.156 771.988 328.637 797.032 369.888 814.119C411.138 831.206 455.351 840 500 840C544.649 840 588.862 831.206 630.112 814.119C671.363 797.032 708.844 771.988 740.416 740.416C771.988 708.844 797.032 671.363 814.119 630.112C831.206 588.862 840 544.649 840 500H1000Z"
                    fill="currentColor"
                />
                <path
                    d="M823.843 348.421L682.422 207L541.001 348.421"
                    stroke="currentColor"
                    strokeWidth="135"
                />
                <circle cx="264" cy="274" r="135" fill="currentColor" />
            </svg>
        </div>
    );
}
