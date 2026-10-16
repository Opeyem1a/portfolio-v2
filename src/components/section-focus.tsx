'use client';

import { useEffect } from 'react';

// Dims every `.focus-section` except the one in the middle of the viewport
// (see the `focus-section` utility in globals.css). Without JS, or with reduced
// motion, nothing is dimmed.
export default function SectionFocus() {
    useEffect(() => {
        if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        const sections = [
            ...document.querySelectorAll<HTMLElement>('.focus-section'),
        ];
        let frame = 0;

        const update = () => {
            const atBottom =
                innerHeight + scrollY >=
                document.documentElement.scrollHeight - 2;
            const middle = innerHeight / 2;
            // The section crossing the middle, else the nearest one; the last
            // section can't always reach the middle, so it wins at the bottom.
            const distance = (el: HTMLElement) => {
                const { top, bottom } = el.getBoundingClientRect();
                return top > middle
                    ? top - middle
                    : Math.max(middle - bottom, 0);
            };
            const active = atBottom
                ? sections.at(-1)
                : sections.reduce((a, b) =>
                      distance(b) < distance(a) ? b : a
                  );
            for (const el of sections) {
                el.toggleAttribute('data-dimmed', el !== active);
            }
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
            for (const el of sections) el.removeAttribute('data-dimmed');
        };
    }, []);

    return null;
}
