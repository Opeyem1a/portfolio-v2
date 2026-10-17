'use client';

import { useEffect, useRef } from 'react';
import { t } from '@/lib/t';

// The star rolls along the line as the divider scrolls up the viewport:
// --progress goes 0 → 1 from the bottom of the viewport to the top.
export default function SectionDivider() {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
            el.style.setProperty('--progress', '0.5');
            return;
        }

        let frame = 0;
        const update = () => {
            const { top } = el.getBoundingClientRect();
            const progress = Math.min(
                Math.max((innerHeight - top) / innerHeight, 0),
                1
            );
            el.style.setProperty('--progress', `${progress}`);
        };
        const onScroll = () => {
            cancelAnimationFrame(frame);
            frame = requestAnimationFrame(update);
        };

        update();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll, { passive: true });
        return () => {
            cancelAnimationFrame(frame);
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
        };
    }, []);

    return (
        <div
            ref={ref}
            aria-hidden="true"
            className="flex items-center gap-3 [--progress:0]"
        >
            <div
                className="h-px bg-line"
                style={{ flexGrow: 'calc(var(--progress) * 100)' }}
            />
            <svg
                viewBox="0 0 48 48"
                className={t({
                    size: 'size-5 shrink-0 fill-sun',
                    rotate: 'rotate-[calc(var(--progress)*360deg)]',
                })}
            >
                <rect x="22" width="4" height="48" rx="2" />
                <rect
                    x="48"
                    y="22"
                    width="4"
                    height="48"
                    rx="2"
                    transform="rotate(90 48 22)"
                />
                <rect
                    x="43"
                    y="40"
                    width="4"
                    height="48"
                    rx="2"
                    transform="rotate(135 43 40)"
                />
                <rect
                    x="8.82812"
                    y="42.7695"
                    width="4"
                    height="48"
                    rx="2"
                    transform="rotate(-135 8.82812 42.7695)"
                />
            </svg>
            <div
                className="h-px bg-line"
                style={{ flexGrow: 'calc((1 - var(--progress)) * 100)' }}
            />
        </div>
    );
}
