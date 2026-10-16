# portfolio-v2

[opeyadeyemi.com](https://opeyadeyemi.com)

Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS v4.

```bash
yarn dev    # http://localhost:3000
yarn build
yarn lint   # tsc + eslint + prettier
yarn fix
```

- `src/app` — layout, the page, and the `/hello` note route (notes and guestbook
  signatures are relayed to Discord)
- `src/components` — client pieces (projects accordion, Email me, guestbook,
  note form) and the intro's stickers
- `src/data` — projects, links, and approved guestbook signatures
- Theme tokens (colours, breakpoint, fonts, easing) live in
  `src/app/globals.css`; colours swap with `prefers-color-scheme`
