'use client';

import { useEffect, useRef } from 'react';
import { t } from '@/lib/t';

const SIZE = 48;

/** Anything with its own hover state; the blob gets out of its way. */
const INTERACTIVE = 'a, button, input, label';

/**
 * An inverting circle that follows the cursor, and shrinks away over links,
 * buttons and fields. Only shown on devices with a real cursor.
 */
export default function CursorBlob() {
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
            const overInteractive =
                e.target instanceof Element && !!e.target.closest(INTERACTIVE);
            blob.dataset.state = overInteractive ? 'hidden' : 'idle';
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
                transition:
                    'transition-[translate,scale,opacity] duration-[180ms,200ms,200ms] ease-out motion-reduce:transition-[opacity]',
            })}
        />
    );
}
