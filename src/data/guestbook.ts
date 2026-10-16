export type Vibe = {
    fill: 'solid' | 'gradient';
    corner: 'sharp' | 'rounded';
    type: 'sans' | 'serif';
};

export type Signature = Vibe & { name: string };

export const GRADIENT =
    'radial-gradient(130% 160% at 0% 0%, #FFF6CF 0%, #FFE27A 55%, #FFC93C 100%)';

// Signatures arrive as notes through /hello. Paste approved ones here.
export const SIGNATURES: Signature[] = [
    { name: 'yours truly', fill: 'solid', corner: 'sharp', type: 'sans' },
];
