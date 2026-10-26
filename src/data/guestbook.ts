type Vibe = {
    fill: 'solid' | 'gradient';
    corner: 'sharp' | 'rounded';
    type: 'sans' | 'serif';
};

type Signature = Vibe & { name: string };

const GRADIENT =
    'radial-gradient(130% 160% at 0% 0%, #FFF6CF 0%, #FFE27A 55%, #FFC93C 100%)';

// Signatures arrive as notes through /hello. Paste approved ones here.
const SIGNATURES: Signature[] = [
    { name: 'yours truly', fill: 'gradient', corner: 'rounded', type: 'sans' },
    { name: 'NotAbhi', fill: 'solid', corner: 'sharp', type: 'serif' },
    { name: 'barthélemy', fill: 'solid', corner: 'sharp', type: 'sans' },
    { name: 'abhi', fill: 'solid', corner: 'rounded', type: 'serif' },
    { name: 'Noush Doush', fill: 'gradient', corner: 'rounded', type: 'serif' },
    { name: 'Brenden T', fill: 'gradient', corner: 'rounded', type: 'sans' },
    { name: 'Sophia! :)', fill: 'gradient', corner: 'rounded', type: 'serif' },
    {
        name: 'girlbossnova;)',
        fill: 'gradient',
        corner: 'rounded',
        type: 'sans',
    },
    { name: 'emdawgz', fill: 'gradient', corner: 'rounded', type: 'sans' },
    { name: 'Laurawr', fill: 'gradient', corner: 'rounded', type: 'serif' },
    { name: 'te', fill: 'solid', corner: 'sharp', type: 'sans' },
    { name: 'j.', fill: 'solid', corner: 'rounded', type: 'sans' },
];

export type { Vibe, Signature };
export { GRADIENT, SIGNATURES };
