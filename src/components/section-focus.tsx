'use client';

import { useEffect } from 'react';

// Dims every `.focus-section` except the one under a moving focus line
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
            // The focus line sweeps from the top of the viewport to the bottom
            // as the page scrolls, so every section crosses it in turn, even
            // short ones near the end that could never reach the middle.
            const max = document.documentElement.scrollHeight - innerHeight;
            const line = max > 0 ? innerHeight * (scrollY / max) : 0;
            // Distance from the line; 0 while the section spans it.
            const distance = (el: HTMLElement) => {
                const { top, bottom } = el.getBoundingClientRect();
                return Math.max(top - line, line - bottom, 0);
            };
            const active = sections.reduce((a, b) =>
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
