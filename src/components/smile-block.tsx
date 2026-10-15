'use client';

import { useEffect, useRef } from 'react';
import Smile from '@/assets/smile.svg';

// The smile drifts towards the cursor. --x and --y place it within the block's
// free space (0 = start, 1 = end).
//
// Mirrors the original flex-spacer implementation: each side has a weight, a
// negative weight is ignored (the side keeps its last value), and weights
// summing to less than 1 only use that share of the free space.
export default function SmileBlock() {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const weights = { top: 0.1, bottom: 1, left: 1, right: 1 };
        const setWeight = (side: keyof typeof weights, value: number) => {
            if (value >= 0) weights[side] = value;
        };

        const onMouseMove = (e: MouseEvent) => {
            const el = ref.current;
            if (!el) return;
            const rect = el.getBoundingClientRect();
            const ratioX =
                (e.clientX - (rect.left + rect.width / 2)) / window.innerWidth;
            const ratioY =
                (e.clientY - (rect.top + rect.height / 2)) / window.innerHeight;

            setWeight('left', ratioX + 0.5);
            setWeight('right', 0.5 - ratioX);
            setWeight('top', ratioY + 0.5);
            setWeight('bottom', 0.5 - ratioY);

            const { top, bottom, left, right } = weights;
            el.style.setProperty('--x', `${left / Math.max(1, left + right)}`);
            el.style.setProperty('--y', `${top / Math.max(1, top + bottom)}`);
        };

        window.addEventListener('mousemove', onMouseMove, { passive: true });
        return () => window.removeEventListener('mousemove', onMouseMove);
    }, []);

    return (
        <div
            ref={ref}
            data-hoverable
            className="[container-type:size] h-full rounded-[6px] bg-primary p-[clamp(0.5rem,4vw,2rem)] [--x:0.5] [--y:calc(1/11)]"
        >
            <Smile className="aspect-square w-[clamp(1.5rem,100%,13rem)] translate-x-[calc(var(--x)*(100cqw-100%))] translate-y-[calc(var(--y)*(100cqh-100%))] transition-[translate] duration-600 ease-out motion-reduce:transition-none [&>[fill]]:fill-ink [&>[stroke]]:stroke-ink" />
        </div>
    );
}
