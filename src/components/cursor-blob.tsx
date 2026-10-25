'use client';

import { useEffect, useRef } from 'react';
import { t } from '@/lib/t';

const SIZE = 40;

/**
 * An inverting circle that follows the cursor. It shrinks away over anything
 * marked `data-hover-none`, which elements with their own hover state opt into.
 * Only shown on devices with a real cursor.
 */
function CursorBlob() {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let placed = false;

        const onMouseMove = (e: MouseEvent) => {
            const blob = ref.current;
            if (!blob) return;

            blob.style.translate = `${e.clientX - SIZE / 2}px ${e.clientY - SIZE / 2}px`;
            if (!placed) {
                // Jump to the cursor on first move instead of sliding in from the corner
                blob.style.transitionProperty = 'none';
                void blob.offsetWidth;
                blob.style.transitionProperty = '';
                placed = true;
            }
            const hide =
                e.target instanceof Element &&
                !!e.target.closest('[data-hover-none]');
            blob.dataset.state = hide ? 'hidden' : 'idle';
        };

        window.addEventListener('mousemove', onMouseMove, { passive: true });
        return () => window.removeEventListener('mousemove', onMouseMove);
    }, []);

    return (
        <div
            ref={ref}
            aria-hidden="true"
            data-state="hidden"
            style={{ width: SIZE, height: SIZE }}
            className={t({
                position: 'pointer-events-none fixed top-0 left-0 z-10',
                visibility: 'invisible [@media(hover:hover)]:visible',
                shape: 'rounded-full backdrop-invert',
                idle: 'data-[state=idle]:scale-50',
                hidden: 'data-[state=hidden]:scale-25 data-[state=hidden]:opacity-0',
                /**
                 * An ease-out on translate makes it drift after the cursor.
                 * Each move restarts the transition from wherever the blob is,
                 * so it stays smooth while the cursor keeps moving.
                 */
                transition:
                    'transition-[translate,scale,opacity] duration-[450ms,200ms,200ms] ease-out motion-reduce:transition-[opacity]',
            })}
        />
    );
}

export default CursorBlob;
