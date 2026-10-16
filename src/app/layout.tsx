import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { Manrope, Montserrat } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import CursorBlob from '@/components/cursor-blob';
import './globals.css';

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' });
const montserrat = Montserrat({
    subsets: ['latin'],
    style: ['normal'],
    variable: '--font-montserrat',
});

export const metadata: Metadata = {
    title: 'Opey Adeyemi',
    description: 'A selection of thoughts and work.',
};

export const viewport: Viewport = {
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: 'rgb(252 252 252)' },
        { media: '(prefers-color-scheme: dark)', color: 'rgb(15 15 15)' },
    ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html
            lang="en"
            className={`${manrope.variable} ${montserrat.variable}`}
        >
            <body className="font-sans">
                {children}
                <CursorBlob size={48} />
                <Analytics />
            </body>
        </html>
    );
}
