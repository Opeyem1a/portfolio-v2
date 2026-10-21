import type { ReactNode } from 'react';
import Swatch from '@/components/swatch';

/** The styles I'm into right now, shown above the guestbook. */
function Preferences() {
    return (
        <div className="flex items-baseline gap-5 text-sm text-muted max-sm:gap-4">
            <h3 className="whitespace-nowrap">I’m liking</h3>
            <ul className="flex gap-5 max-sm:gap-4">
                <Preference word="Gradients" not="Solid">
                    <Swatch option="gradient" />
                </Preference>
                <Preference word="Rounded" not="Sharp">
                    <Swatch option="rounded" />
                </Preference>
                <Preference
                    word="Sans"
                    not={<span className="font-serif">Serif</span>}
                >
                    <Swatch option="sans" />
                </Preference>
            </ul>
        </div>
    );
}

// One style I prefer, with the one I don't struck through.
function Preference({
    word,
    not,
    children,
}: {
    word: string;
    not: ReactNode;
    children: ReactNode;
}) {
    return (
        <li className="flex items-center gap-1.5 whitespace-nowrap">
            {children}
            {word}
            {/* No room for the alternatives on phones */}
            <s className="text-faint max-sm:hidden">
                <span className="sr-only">not </span>
                {not}
            </s>
        </li>
    );
}

export default Preferences;
