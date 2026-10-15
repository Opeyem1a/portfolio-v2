/**
 * Joins a config object's values into one className. Labelling groups of
 * Tailwind classes keeps long class lists readable without screen wrapping.
 */
export function t(config: Record<string, string>): string {
    return Object.values(config).join(' ');
}
