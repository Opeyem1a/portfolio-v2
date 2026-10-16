'use client';

import { useEffect, useRef, useState } from 'react';

// The address is assembled on click so it isn't sitting in the HTML for scrapers.
export default function EmailMe({ className }: { className: string }) {
    const [email, setEmail] = useState<string | null>(null);
    const link = useRef<HTMLAnchorElement>(null);

    // The button is replaced by the link, so keep focus where it was.
    useEffect(() => {
        if (email) link.current?.focus();
    }, [email]);

    if (email) {
        return (
            <a ref={link} href={`mailto:${email}`} className={className}>
                {email}
            </a>
        );
    }
    return (
        <button
            className={className}
            onClick={() => setEmail(['opeyadeyemi', 'gmail.com'].join('@'))}
        >
            Email me
        </button>
    );
}
