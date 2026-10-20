import { GRADIENT } from '@/data/guestbook';
import { t } from '@/lib/t';

// The little icon for each vibe option, shared by the guestbook form and the
// "I’m liking" row.
export default function Swatch({ option }: { option: string }) {
    if (option === 'sans' || option === 'serif') {
        return (
            <span
                aria-hidden="true"
                className={
                    option === 'serif'
                        ? 'font-serif text-lg leading-none'
                        : 'text-sm leading-none font-semibold'
                }
            >
                Aa
            </span>
        );
    }
    return (
        <span
            aria-hidden="true"
            style={{ background: option === 'gradient' ? GRADIENT : undefined }}
            className={t({
                size: 'inline-block size-3.25 flex-none',
                look: {
                    solid: 'bg-sun',
                    gradient: '',
                    sharp: 'border border-current',
                    rounded: 'rounded-sm border border-current',
                }[option]!,
            })}
        />
    );
}
