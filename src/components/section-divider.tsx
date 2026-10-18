'use client';

import { useEffect, useRef } from 'react';
import { t } from '@/lib/t';

// The star rolls along the line as the heading scrolls up the screen:
// --progress goes 0 → 1 from the bottom of the screen to the top. Measured
// against the screen, not the window, because mobile browsers resize the
// window as their address bar shows and hides, which made the star jump.
// A section title with a line running out from it.
export default function SectionDivider({ title }: { title: string }) {
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
            const height = screen.availHeight;
            const progress = Math.min(Math.max((height - top) / height, 0), 1);
            el.style.setProperty('--progress', `${progress}`);
        };
        const onScroll = () => {
            cancelAnimationFrame(frame);
            frame = requestAnimationFrame(update);
        };

        update();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => {
            cancelAnimationFrame(frame);
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    return (
        <div className="flex items-center gap-4">
            <h2 className="shrink-0 text-sm font-medium text-muted">{title}</h2>
            <div
                ref={ref}
                aria-hidden="true"
                className="[container-type:inline-size] relative flex h-5 grow items-center [--progress:0]"
            >
                <div className="h-px w-full bg-line" />
                {/* Moved with transforms only, so scrolling never triggers layout.
                    The background padding cuts the line either side of the star. */}
                <div
                    className={t({
                        layout: 'absolute top-0 left-0 bg-bg px-3',
                        position:
                            'translate-x-[calc(var(--progress)*(100cqw-100%))]',
                        transition:
                            'transition-[translate] duration-200 ease-(--ease-out)',
                    })}
                >
                    <svg
                        viewBox="0 0 48 48"
                        className={t({
                            size: 'block size-5 fill-sun',
                            rotate: 'rotate-[calc(var(--progress)*360deg)]',
                            transition:
                                'transition-[rotate] duration-200 ease-(--ease-out)',
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
                </div>
            </div>
        </div>
    );
}
