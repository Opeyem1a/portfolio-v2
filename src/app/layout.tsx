import 'src/static/globals.css'
import React from "react";
import {Manrope} from 'next/font/google'
import StyledComponentsRegistry from "@/lib/registry";

const manrope = Manrope({subsets: ['latin']})

export const metadata = {
    title: "Opey's Playground",
    description: 'A portfolio of my work.',
}

type RootLayoutProps = {
    children: React.ReactNode
}

export default function RootLayout({children}: RootLayoutProps) {
    return (
        <html lang="en">
        <body className={manrope.className}>
        <StyledComponentsRegistry>
            {children}
        </StyledComponentsRegistry>
        </body>
        </html>
    )
}
