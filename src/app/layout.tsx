import 'src/static/globals.css'
import React from "react";
import {Manrope} from 'next/font/google'
import StyledComponentsRegistry from "@/lib/registry";
import Blob from "@/components/Blob";

const manrope = Manrope({subsets: ['latin']})

export const metadata = {
    title: "Opey Adeyemi",
    description: 'A selection of thoughts and work.',
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
            <Blob size={48}/>
        </StyledComponentsRegistry>
        </body>
        </html>
    )
}
