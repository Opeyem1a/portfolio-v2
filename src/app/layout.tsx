import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { Archivo, Instrument_Serif } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import CursorBlob from '@/components/cursor-blob';
import './globals.css';

const archivo = Archivo({
    subsets: ['latin'],
    weight: ['400', '600'],
    variable: '--font-archivo',
});
const instrumentSerif = Instrument_Serif({
    subsets: ['latin'],
    weight: '400',
    variable: '--font-instrument-serif',
});

const metadata: Metadata = {
    metadataBase: new URL('https://opeyadeyemi.com'),
    title: 'Opey Adeyemi',
    description:
        'Product engineer at Rokt Aftersell. I care about doing novel things in fun ways.',
    twitter: { card: 'summary_large_image' },
};

const viewport: Viewport = {
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#ffffff' },
        { media: '(prefers-color-scheme: dark)', color: '#0b0b0a' },
    ],
};

function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html
            lang="en"
            className={`${archivo.variable} ${instrumentSerif.variable}`}
        >
            <head>
                {/* Low priority so the fonts load first */}
                <link
                    rel="preload"
                    href="https://upload.wikimedia.org/wikipedia/commons/5/5c/Image_gaussian_noise_example.png"
                    as="image"
                    fetchPriority="low"
                />
            </head>
            <body className="font-sans">
                {children}
                <CursorBlob />
                {/* Film grain, as on wdyt.site; styled in globals.css */}
                <div id="grain-filter" />
                <Analytics />
            </body>
        </html>
    );
}

export { metadata, viewport };
export default RootLayout;
