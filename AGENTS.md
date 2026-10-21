# Agent guidelines

## Code

- Export at the bottom of the file (`export default Name;`, `export { a, b };`).
  Never inline `export` on a function, variable or type.
- Multi-line comments are JSDoc blocks (`/** … */`), not stacked `//` lines.
- Each component gets its own file in `src/components`. Small helpers used by
  only that component (e.g. `Chevron` in `project-row.tsx`) can live alongside
  it. Splitting into files to keep things readable and reviewable is encouraged;
  it isn't abstraction.
- Use the shared pieces: `Button` for anything button-shaped, `Section` for page
  sections.
- Group long Tailwind class lists with `t({ … })` (`src/lib/t.ts`).
- Font sizes come from the type scale in `globals.css` (`text-xs` … `text-lg`)
  and spacing from Tailwind's scale. Avoid one-off px/rem literals.
- Two font weights only: 400 and 600.
- Elements with their own hover state get `data-hover-none`, so the cursor blob
  gets out of the way.

## Motion

- Prefer CSS transitions over JS-driven animation.
- Animate `translate`, `scale` and `opacity`. Avoid animating anything that
  repaints or re-lays out every frame (gradients, `flex`, sizes).
- Respect `prefers-reduced-motion`.

## Browser support

- Use features that are Baseline widely available.
- Anything else needs a fallback that still looks right, and the owner decides
  whether it's acceptable. Currently accepted: `corner-shape: squircle` (plain
  rounded corners elsewhere) and `text-wrap: pretty` (normal wrapping
  elsewhere).

## Workflow

- For open-ended design changes, show options (screenshots) before building.
- Run `yarn lint` and `yarn build` before pushing.
