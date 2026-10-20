import type { ReactNode } from 'react';
import { t } from '@/lib/t';

// Pick one of a few options, shown side by side in a track.
export default function SegmentedControl<T extends string>({
    label,
    options,
    value,
    onChange,
    renderOption = (option) => option,
}: {
    label: string;
    options: readonly T[];
    value: T;
    onChange: (value: T) => void;
    renderOption?: (option: T) => ReactNode;
}) {
    return (
        <div
            role="group"
            aria-label={label}
            className="inline-flex gap-0.5 rounded-xl bg-surface p-0.75 squircle max-sm:flex max-sm:basis-full"
        >
            {options.map((option) => {
                const on = value === option;
                return (
                    <button
                        key={option}
                        aria-pressed={on}
                        onClick={() => onChange(option)}
                        className={t({
                            layout: 'inline-flex min-h-10 cursor-pointer items-center gap-1.5 rounded-lg px-2.5 squircle max-sm:flex-1 max-sm:justify-center',
                            font: 'text-sm capitalize',
                            color: on
                                ? 'bg-bg text-fg shadow-[0_1px_2px_rgb(17_17_17/0.08),0_0_0_1px_var(--color-line)]'
                                : 'text-faint hover:text-fg',
                            motion: 'transition-colors duration-160 ease-(--ease-out)',
                        })}
                    >
                        {renderOption(option)}
                    </button>
                );
            })}
        </div>
    );
}
