'use client';

import { useEffect, useRef, useState } from 'react';
import { t } from '@/lib/t';

const cta = t({
    layout: 'inline-flex min-h-11 cursor-pointer items-center gap-2.5 px-[18px]',
    shape: 'bg-fg text-bg hover:bg-fg-hover',
    font: 'text-[1rem] leading-none font-medium',
    motion: 'transition-[background-color,scale] duration-160 ease-(--ease-out) active:scale-97',
});

// The address is assembled on click so it isn't sitting in the HTML for scrapers.
export default function SayHi() {
    const [email, setEmail] = useState<string | null>(null);
    const link = useRef<HTMLAnchorElement>(null);

    // The button is replaced by the link, so keep focus where it was.
    useEffect(() => {
        if (email) link.current?.focus();
    }, [email]);

    if (email) {
        return (
            <a ref={link} href={`mailto:${email}`} className={cta}>
                <MailIcon />
                {email}
            </a>
        );
    }
    return (
        <button
            className={cta}
            onClick={() => setEmail(['opeyadeyemi', 'gmail.com'].join('@'))}
        >
            <MailIcon />
            Say hi
        </button>
    );
}

function MailIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 20 20" aria-hidden="true">
            <rect
                x="2.5"
                y="4.5"
                width="15"
                height="11"
                rx="2"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
            />
            <path
                d="M3.5 6l6.5 5 6.5-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
            />
        </svg>
    );
}
