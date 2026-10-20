import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { Archivo, Instrument_Serif } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
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

export const metadata: Metadata = {
    title: 'Opey Adeyemi',
    description: 'A selection of thoughts and work.',
};

export const viewport: Viewport = {
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#ffffff' },
        { media: '(prefers-color-scheme: dark)', color: '#0b0b0a' },
    ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html
            lang="en"
            className={`${archivo.variable} ${instrumentSerif.variable}`}
        >
            <head>
                <link
                    rel="preload"
                    href="https://upload.wikimedia.org/wikipedia/commons/5/5c/Image_gaussian_noise_example.png"
                    as="image"
                />
            </head>
            <body className="font-sans">
                {children}
                {/* Film grain, as on wdyt.site; styled in globals.css */}
                <div id="grain-filter" />
                <Analytics />
            </body>
        </html>
    );
}
