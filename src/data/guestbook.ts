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
];

export type { Vibe, Signature };
export { GRADIENT, SIGNATURES };
