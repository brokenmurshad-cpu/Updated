# Services Smooth Stack + Hamburger Fix

Copy these files into the same paths in your existing project:

- `src/components/sections/Services.tsx`
- `src/components/layout/Header.tsx`
- `src/components/ui/BurgerMenuBtn.tsx`
- `src/lib/animations.ts`

What changed:

- The four **What I Do** service cards now stack smoothly on desktop. The incoming panel rises with a subtle rounded edge and the panel below stays visible instead of becoming black.
- On small screens, the cards are regular sequential panels so no sticky black gaps appear.
- The hamburger now uses direct open/close handlers, so the button consistently opens and closes the menu.
- The menu still has the purple circular reveal and staggered navigation link animation.

After replacement, run:

```bash
npm run dev
```
