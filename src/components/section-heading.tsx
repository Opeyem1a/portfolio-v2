'use client';

import { useEffect, useRef } from 'react';
import Star from '@/assets/star.svg';
import { t } from '@/lib/t';

// The star rolls along the line as the heading scrolls into view.
export default function SectionHeading({ title }: { title: string }) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let frame = 0;

        const update = () => {
            const el = ref.current;
            if (!el) return;
            const top = el.getBoundingClientRect().top;
            const height = window.screen.availHeight;
            const progress =
                top > 0
                    ? Math.round(((height - top) / height) * 1000) / 1000
                    : 1;
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

    const line = 'h-[clamp(0.167rem,0.4vw,0.25rem)] rounded-[3px] bg-bg';

    return (
        <div
            ref={ref}
            className={t({
                layout: 'flex w-full items-center gap-3 tablet:gap-4',
                padding: 'px-5 py-4 tablet:py-5',
                color: 'rounded-[6px] bg-fg text-bg',
            })}
        >
            <h2
                className={t({
                    layout: 'shrink-0',
                    font: 'font-heading text-[1.5rem] font-semibold uppercase tablet:text-[2.25rem]',
                })}
            >
                {title}
            </h2>
            <div
                className={line}
                style={{ flex: 'calc(max(var(--progress, 0), 0) * 100)' }}
            />
            <Star
                className={t({
                    size: 'size-8 tablet:size-12',
                    rotate: 'rotate-[calc(var(--progress,0)*360deg)]',
                    fill: '[&_*]:fill-bg',
                })}
            />
            <div
                className={line}
                style={{ flex: 'calc((1 - var(--progress, 0)) * 100)' }}
            />
        </div>
    );
}
