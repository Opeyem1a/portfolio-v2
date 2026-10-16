'use client';

import { useEffect, useRef } from 'react';
import Smile from '@/assets/smile.svg';
import { t } from '@/lib/t';

const clamp = (value: number) => Math.min(Math.max(value, 0), 1);

// The smile drifts towards the cursor. --x and --y place it within the block's
// free space (0 = start, 1 = end).
export default function SmileBlock() {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const onMouseMove = (e: MouseEvent) => {
            const el = ref.current;
            if (!el) return;
            const rect = el.getBoundingClientRect();
            const ratioX =
                (e.clientX - (rect.left + rect.width / 2)) / window.innerWidth;
            const ratioY =
                (e.clientY - (rect.top + rect.height / 2)) / window.innerHeight;
            el.style.setProperty('--x', `${clamp(ratioX + 0.5)}`);
            el.style.setProperty('--y', `${clamp(ratioY + 0.5)}`);
        };

        window.addEventListener('mousemove', onMouseMove, { passive: true });
        return () => window.removeEventListener('mousemove', onMouseMove);
    }, []);

    return (
        <div
            ref={ref}
            data-hoverable
            className={t({
                shape: 'h-full rounded-[6px] bg-primary p-[clamp(0.5rem,4vw,2rem)]',
                // Container units let the smile translate across the free space
                container: '[container-type:size]',
                start: '[--x:0.5] [--y:calc(1/11)]',
            })}
        >
            <Smile
                className={t({
                    size: 'aspect-square w-[clamp(1.5rem,100%,13rem)]',
                    position:
                        'translate-x-[calc(var(--x)*(100cqw-100%))] translate-y-[calc(var(--y)*(100cqh-100%))]',
                    transition:
                        'transition-[translate] duration-600 ease-out motion-reduce:transition-none',
                    color: '[&>[fill]]:fill-ink [&>[stroke]]:stroke-ink',
                })}
            />
        </div>
    );
}
