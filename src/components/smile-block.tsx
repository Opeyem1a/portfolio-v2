'use client';

import { useEffect, useRef } from 'react';
import { t } from '@/lib/t';

const clamp = (value: number) => Math.min(Math.max(value, 0), 1);

/** Roughly how long the smile takes to catch up with the cursor, in ms. */
const LAG = 250;

type Axis = { value: number; velocity: number };

/**
 * Moves value towards target on a critically damped spring (Unity's
 * SmoothDamp). Velocity carries over between frames, so the smile doesn't
 * lurch each time the target jumps, and it never overshoots.
 */
const smoothDamp = (axis: Axis, target: number, dt: number) => {
    const omega = 2 / LAG;
    const x = omega * dt;
    const decay = 1 / (1 + x + 0.48 * x * x + 0.235 * x * x * x);
    const change = axis.value - target;
    const temp = (axis.velocity + omega * change) * dt;
    axis.velocity = (axis.velocity - omega * temp) * decay;
    axis.value = target + (change + temp) * decay;
};

/**
 * The smile drifts towards the cursor, with a soft glow behind it. --smile-x
 * and --smile-y place them within their free space (0 = start, 1 = end).
 *
 * A CSS transition restarted on every mousemove lurches and stalls when the
 * events arrive unevenly, since each restart throws away the current speed.
 * A spring stepped every frame keeps it, so the motion stays continuous.
 * Only translate changes, so nothing repaints while they glide.
 */
function SmileBlock() {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');
        const target = { x: 0.5, y: 1 / 11 };
        const current = {
            x: { value: target.x, velocity: 0 },
            y: { value: target.y, velocity: 0 },
        };
        let frame = 0;
        let last = 0;

        const apply = () => {
            ref.current?.style.setProperty('--smile-x', `${current.x.value}`);
            ref.current?.style.setProperty('--smile-y', `${current.y.value}`);
        };

        const snap = () => {
            current.x = { value: target.x, velocity: 0 };
            current.y = { value: target.y, velocity: 0 };
        };

        const step = (now: number) => {
            // Clamped: rAF time can precede the event, and a stalled tab shouldn't fling it
            const dt = Math.min(Math.max(now - last, 0), 100);
            last = now;
            smoothDamp(current.x, target.x, dt);
            smoothDamp(current.y, target.y, dt);

            const settled =
                Math.abs(target.x - current.x.value) < 1e-4 &&
                Math.abs(target.y - current.y.value) < 1e-4 &&
                Math.abs(current.x.velocity) < 1e-6 &&
                Math.abs(current.y.velocity) < 1e-6;
            if (settled) snap();
            apply();
            frame = settled ? 0 : requestAnimationFrame(step);
        };

        const onMouseMove = (e: MouseEvent) => {
            const el = ref.current;
            if (!el) return;
            const rect = el.getBoundingClientRect();
            target.x = clamp(
                (e.clientX - (rect.left + rect.width / 2)) / innerWidth + 0.5
            );
            target.y = clamp(
                (e.clientY - (rect.top + rect.height / 2)) / innerHeight + 0.5
            );

            if (reduceMotion.matches) {
                snap();
                apply();
            } else if (!frame) {
                last = performance.now();
                frame = requestAnimationFrame(step);
            }
        };

        window.addEventListener('mousemove', onMouseMove, { passive: true });
        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            cancelAnimationFrame(frame);
        };
    }, []);

    return (
        <div
            ref={ref}
            aria-hidden="true"
            data-hover-none
            className={t({
                shape: 'relative max-h-[50cqw] min-h-48 grow-[1000] overflow-hidden rounded-xl bg-sun max-sm:min-h-40',
                start: '[--smile-x:0.5] [--smile-y:calc(1/11)]',
            })}
        >
            {/* The glow's track spans the whole block. The glow is centred on
                the track's top-left corner, then translated across it. */}
            <div className="[container-type:size] absolute inset-0">
                <div
                    className={t({
                        shape: 'absolute top-[-120%] left-[-80%] h-[240%] w-[160%] bg-[radial-gradient(closest-side,#ffd866,transparent_70%)]',
                        position:
                            'translate-x-[calc(var(--smile-x)*100cqw)] translate-y-[calc(var(--smile-y)*100cqh)]',
                    })}
                />
            </div>
            {/* The smile's track, inset so it never touches the edges. Absolute,
                so it has a definite height for the container units below. */}
            <div className="[container-type:size] absolute inset-12 max-sm:inset-8">
                <svg
                    viewBox="0 0 1000 1000"
                    fill="none"
                    className={t({
                        size: 'size-16 text-ink max-sm:size-10',
                        position:
                            'translate-x-[calc(var(--smile-x)*(100cqw-100%))] translate-y-[calc(var(--smile-y)*(100cqh-100%))]',
                    })}
                >
                    <path
                        d="M1000 500C1000 565.661 987.067 630.679 961.94 691.342C936.812 752.005 899.983 807.124 853.553 853.553C807.124 899.983 752.004 936.812 691.342 961.94C630.679 987.067 565.661 1000 500 1000C434.339 1000 369.321 987.067 308.658 961.94C247.995 936.812 192.876 899.983 146.447 853.553C100.017 807.124 63.1876 752.005 38.0602 691.342C12.9329 630.679 -5.74026e-06 565.661 0 500L160 500C160 544.649 168.794 588.862 185.881 630.112C202.968 671.363 228.012 708.844 259.584 740.416C291.156 771.988 328.637 797.032 369.888 814.119C411.138 831.206 455.351 840 500 840C544.649 840 588.862 831.206 630.112 814.119C671.363 797.032 708.844 771.988 740.416 740.416C771.988 708.844 797.032 671.363 814.119 630.112C831.206 588.862 840 544.649 840 500H1000Z"
                        fill="currentColor"
                    />
                    <path
                        d="M823.843 348.421L682.422 207L541.001 348.421"
                        stroke="currentColor"
                        strokeWidth="135"
                    />
                    <circle cx="264" cy="274" r="135" fill="currentColor" />
                </svg>
            </div>
        </div>
    );
}

export default SmileBlock;
