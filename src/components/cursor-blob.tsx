'use client';

import { useEffect, useRef } from 'react';
import { t } from '@/lib/t';

// Elements opt in to an expanded blob with `data-hoverable`, or hide it with
// `data-hover-none`.
const closest = (target: EventTarget | null, selector: string) =>
    target instanceof Element && !!target.closest(selector);

export default function CursorBlob({ size }: { size: number }) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let placed = false;

        const onMouseMove = (e: MouseEvent) => {
            const blob = ref.current;
            if (!blob) return;

            if (closest(e.target, '[data-hover-none]')) {
                blob.dataset.state = 'hidden';
                return;
            }

            blob.style.translate = `${e.clientX - size / 2}px ${e.clientY - size / 2}px`;
            if (!placed) {
                // Jump to the cursor on first move instead of sliding in from the corner.
                blob.style.transitionProperty = 'none';
                void blob.offsetWidth;
                blob.style.transitionProperty = '';
                placed = true;
            }
            blob.dataset.state = closest(e.target, '[data-hoverable]')
                ? 'expanded'
                : 'idle';
        };

        window.addEventListener('mousemove', onMouseMove, { passive: true });
        return () => window.removeEventListener('mousemove', onMouseMove);
    }, [size]);

    return (
        <div
            ref={ref}
            aria-hidden
            data-state="hidden"
            style={{ width: size, height: size }}
            className={t({
                position: 'pointer-events-none fixed top-0 left-0 z-2',
                // Only shown on devices with a real cursor
                visibility: 'invisible [@media(hover:hover)]:visible',
                shape: 'rounded-full backdrop-invert',
                idle: 'data-[state=idle]:scale-50',
                expanded: 'data-[state=expanded]:bg-paper/50',
                hidden: 'data-[state=hidden]:scale-25 data-[state=hidden]:opacity-0',
                transition:
                    'transition-[translate,scale,opacity,background-color] duration-[180ms,200ms,200ms,200ms] ease-out motion-reduce:transition-[opacity,background-color]',
            })}
        />
    );
}
