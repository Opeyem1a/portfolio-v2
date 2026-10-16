'use client';

import { useEffect } from 'react';

// The `recede` utility (globals.css) uses CSS scroll-driven animations, which
// Firefox doesn't support. There, this does the same thing on scroll. Keep the
// end values in sync with the `recede` keyframes.
export default function RecedeFallback() {
    useEffect(() => {
        if (
            CSS.supports('animation-timeline: view()') ||
            matchMedia('(prefers-reduced-motion: reduce)').matches
        ) {
            return;
        }

        const elements = [...document.querySelectorAll<HTMLElement>('.recede')];
        let frame = 0;

        const update = () => {
            for (const el of elements) {
                const { top, height } = el.getBoundingClientRect();
                // 0 when the top edge reaches the viewport top, 1 once fully out
                const progress = Math.min(Math.max(-top / height, 0), 1);
                el.style.transformOrigin = '50% 100%';
                el.style.scale = `${1 - 0.05 * progress}`;
                el.style.opacity = `${1 - 0.6 * progress}`;
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
        };
    }, []);

    return null;
}
