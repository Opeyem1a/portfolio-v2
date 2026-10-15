# portfolio-v2

[opeyadeyemi.com](https://opeyadeyemi.com)

Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS v4.

```bash
yarn dev    # http://localhost:3000
yarn build
yarn lint   # tsc + eslint + prettier
yarn fix
```

- `src/app` — layout, page, page sections (`_sections`), and the `/hello` note
  route
- `src/components` — interactive pieces (cursor blob, section heading, smile)
  and project rows
- `src/data` — projects and links
- `src/assets` — SVGs, imported as React components via SVGR
- Theme tokens (colours, breakpoints, fonts, easing) live in
  `src/app/globals.css`; colours swap with `prefers-color-scheme`
