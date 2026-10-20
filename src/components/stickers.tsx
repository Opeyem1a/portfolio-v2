import type { ReactNode } from 'react';

/**
 * Hand-drawn stickers that sit inside the intro's project references, keyed
 * by project id.
 */
export const STICKERS = {
    wdyt: {
        rotate: '-8deg',
        svg: (
            <>
                <g fill="#FF8FB1" stroke="#111" strokeWidth="1.6">
                    <circle cx="20" cy="10" r="7.5" />
                    <circle cx="30" cy="20" r="7.5" />
                    <circle cx="20" cy="30" r="7.5" />
                    <circle cx="10" cy="20" r="7.5" />
                </g>
                <circle
                    cx="20"
                    cy="20"
                    r="7.5"
                    fill="#FFE27A"
                    stroke="#111"
                    strokeWidth="1.6"
                />
                <path
                    d="M17.6 17.8a2.6 2.6 0 1 1 3.6 2.3c-.8.4-1.2.9-1.2 1.8"
                    fill="none"
                    stroke="#111"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                />
                <circle cx="20" cy="24.6" r="1.1" fill="#111" />
            </>
        ),
    },
    lovely: {
        rotate: '7deg',
        svg: (
            <>
                <rect
                    x="4"
                    y="10"
                    width="32"
                    height="22"
                    rx="3"
                    fill="#FFF3C4"
                    stroke="#111"
                    strokeWidth="2"
                />
                <path
                    d="M5 12l15 11 15-11"
                    fill="none"
                    stroke="#111"
                    strokeWidth="2"
                    strokeLinejoin="round"
                />
                <path
                    d="M31 4.5c-1.6-2.2-5.2-1.2-5 1.6.2 2.4 5 5.4 5 5.4s4.8-3 5-5.4c.2-2.8-3.4-3.8-5-1.6z"
                    fill="#E5484D"
                    stroke="#111"
                    strokeWidth="1.4"
                    strokeLinejoin="round"
                />
            </>
        ),
    },
    exact: {
        rotate: '-5deg',
        svg: (
            <>
                <path
                    d="M3 20c5-8 11-12 17-12s12 4 17 12c-5 8-11 12-17 12S8 28 3 20z"
                    fill="#FFFFFF"
                    stroke="#111"
                    strokeWidth="2"
                />
                <path d="M20 13a7 7 0 0 0 0 14z" fill="#B5B5AF" />
                <path d="M20 13a7 7 0 0 1 0 14z" fill="#3E63DD" />
                <circle
                    cx="20"
                    cy="20"
                    r="7"
                    fill="none"
                    stroke="#111"
                    strokeWidth="1.6"
                />
                <circle cx="22.5" cy="17.5" r="1.8" fill="#FFFFFF" />
            </>
        ),
    },
    aftersell: {
        rotate: '9deg',
        svg: (
            <>
                <path
                    d="M3 7h6l4 19h19l4-13H11"
                    fill="none"
                    stroke="#111"
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                />
                <rect
                    x="13.5"
                    y="13"
                    width="19"
                    height="10"
                    rx="2"
                    fill="#46A758"
                    stroke="#111"
                    strokeWidth="1.6"
                />
                <path
                    d="M20 18h6M23 15v6"
                    stroke="#FFFFFF"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                />
                <circle cx="15" cy="32" r="3" fill="#111" />
                <circle cx="29" cy="32" r="3" fill="#111" />
            </>
        ),
    },
    pallet: {
        rotate: '-7deg',
        svg: (
            <>
                <circle
                    cx="14"
                    cy="13"
                    r="6"
                    fill="#FFB224"
                    stroke="#111"
                    strokeWidth="1.6"
                />
                <circle
                    cx="27"
                    cy="15"
                    r="5"
                    fill="#3E63DD"
                    stroke="#111"
                    strokeWidth="1.6"
                />
                <path
                    d="M3.5 34c0-7 5-11 10.5-11s10.5 4 10.5 11z"
                    fill="#FFB224"
                    stroke="#111"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                />
                <path
                    d="M19 34c1-6 4-9 8-9s8 3 9 9z"
                    fill="#3E63DD"
                    stroke="#111"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                />
            </>
        ),
    },
    teamable: {
        rotate: '5deg',
        svg: (
            <>
                <path
                    d="M10 20v8c3 3.5 17 3.5 20 0v-8"
                    fill="#6E56CF"
                    stroke="#111"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                />
                <path d="M3 15l17-8 17 8-17 8z" fill="#111" />
                <path d="M34 16.5v10" stroke="#111" strokeWidth="2" />
                <circle
                    cx="34"
                    cy="28"
                    r="2.6"
                    fill="#FFE27A"
                    stroke="#111"
                    strokeWidth="1.2"
                />
            </>
        ),
    },
} satisfies Record<string, { rotate: string; svg: ReactNode }>;
