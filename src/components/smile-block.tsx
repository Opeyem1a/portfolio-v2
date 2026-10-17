'use client';

import { useEffect, useRef } from 'react';
import { t } from '@/lib/t';

const clamp = (value: number) => Math.min(Math.max(value, 0), 1);

// Soft edges so the block bleeds into the page instead of ending on a line.
// The `smile-edge` filter below then roughens and grains that fade.
const FADE = '1.25rem';
const fadeMask = [
    `linear-gradient(to right, transparent, #000 ${FADE}, #000 calc(100% - ${FADE}), transparent)`,
    `linear-gradient(to bottom, transparent, #000 ${FADE}, #000 calc(100% - ${FADE}), transparent)`,
].join(', ');

// Warmer and lighter patches so the yellow isn't flat.
const texture = [
    'radial-gradient(55% 90% at 18% 25%, #ffd86b, transparent 70%)',
    'radial-gradient(45% 80% at 82% 75%, #f2a516, transparent 70%)',
    'radial-gradient(35% 60% at 60% 15%, #ffe08a, transparent 70%)',
    'var(--color-sun)',
].join(', ');

// The smile drifts towards the cursor. --x and --y place it within the block's
// free space (0 = start, 1 = end).
export default function SmileBlock() {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const onMouseMove = (e: MouseEvent) => {
            const el = ref.current;
            if (!el) return;
            const rect = el.getBoundingClientRect();
            const ratioX =
                (e.clientX - (rect.left + rect.width / 2)) / innerWidth;
            const ratioY =
                (e.clientY - (rect.top + rect.height / 2)) / innerHeight;
            el.style.setProperty('--x', `${clamp(ratioX + 0.5)}`);
            el.style.setProperty('--y', `${clamp(ratioY + 0.5)}`);
        };

        window.addEventListener('mousemove', onMouseMove, { passive: true });
        return () => window.removeEventListener('mousemove', onMouseMove);
    }, []);

    return (
        <div
            ref={ref}
            aria-hidden="true"
            className={t({
                shape: 'relative h-48 p-[clamp(1.75rem,5vw,2.5rem)] max-sm:h-40',
                // Container units let the smile translate across the free space
                container: '[container-type:size]',
                start: '[--x:0.5] [--y:calc(1/11)]',
            })}
        >
            {/* Filtered separately so the smile itself isn't distorted */}
            <div
                className="absolute inset-0"
                style={{ filter: 'url(#smile-edge)' }}
            >
                <div
                    className="size-full"
                    style={{
                        background: texture,
                        maskImage: fadeMask,
                        maskComposite: 'intersect',
                    }}
                />
            </div>
            <svg className="absolute size-0">
                {/* Large, soft noise wobbles the edge; fine noise scatters it
                    into grain. A flat fill stays flat, so only the edge changes. */}
                <filter
                    id="smile-edge"
                    x="-10%"
                    y="-20%"
                    width="120%"
                    height="140%"
                >
                    <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.015"
                        numOctaves="2"
                        seed="4"
                        result="wobble"
                    />
                    <feDisplacementMap
                        in="SourceGraphic"
                        in2="wobble"
                        scale="6"
                        xChannelSelector="R"
                        yChannelSelector="G"
                        result="wobbly"
                    />
                    <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.9"
                        seed="9"
                        result="grain"
                    />
                    <feDisplacementMap
                        in="wobbly"
                        in2="grain"
                        scale="10"
                        xChannelSelector="R"
                        yChannelSelector="G"
                    />
                </filter>
            </svg>
            <svg
                viewBox="0 0 1000 1000"
                fill="none"
                className={t({
                    size: 'relative size-24 text-ink max-sm:size-20',
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
