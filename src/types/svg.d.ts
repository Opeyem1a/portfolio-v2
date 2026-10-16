// SVGs are imported as React components via @svgr/webpack (see next.config.ts).
declare module '*.svg' {
    import type { FC, SVGProps } from 'react';

    const Svg: FC<SVGProps<SVGSVGElement>>;
    export default Svg;
}
