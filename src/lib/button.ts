import { t } from '@/lib/t';

const VARIANTS = {
    // Text that gets a faint button shape on hover
    ghost: 'text-muted hover:bg-surface-2 hover:text-fg',
    // A faint button that fills in on hover
    soft: 'bg-surface-2 text-fg hover:bg-fg hover:text-bg',
    // The main action
    solid: 'bg-fg font-semibold text-bg hover:opacity-85',
};

/** Classes for every button-shaped link and button, so they share a size. */
export const button = (variant: keyof typeof VARIANTS) =>
    t({
        size: 'cursor-pointer px-2.5 py-1 text-md',
        shape: 'rounded-lg squircle',
        color: VARIANTS[variant],
        motion: 'transition-[color,background-color,opacity] duration-160 ease-(--ease-out)',
    });
