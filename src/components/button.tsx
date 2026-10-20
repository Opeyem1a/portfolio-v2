import type { ReactNode } from 'react';
import { t } from '@/lib/t';

const VARIANTS = {
    // Text that gets a faint button shape on hover
    ghost: 'text-muted hover:bg-surface-2 hover:text-fg',
    // A faint button that fills in on hover
    soft: 'bg-surface-2 text-fg hover:bg-fg hover:text-bg',
    // The main action
    solid: 'bg-fg text-bg hover:opacity-85',
};

// Every button-shaped link and button on the site. With an href it's a link.
export default function Button({
    variant,
    href,
    onClick,
    children,
}: {
    variant: keyof typeof VARIANTS;
    href?: string;
    onClick?: () => void;
    children: ReactNode;
}) {
    const className = t({
        size: 'cursor-pointer px-2.5 py-1 text-md',
        shape: 'rounded-lg squircle',
        color: VARIANTS[variant],
        motion: 'transition-[color,background-color,opacity] duration-160 ease-(--ease-out)',
    });
    return href ? (
        <a href={href} className={className}>
            {children}
        </a>
    ) : (
        <button onClick={onClick} className={className}>
            {children}
        </button>
    );
}
