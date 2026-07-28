# Contact, Menu and Hero Update

Copy these files into the same paths in your Next.js project:

- `src/components/sections/Contact.tsx`
- `src/components/sections/Hero.tsx`
- `src/components/layout/Header.tsx`
- `src/components/ui/BurgerMenuBtn.tsx`
- `src/lib/animations.ts`

Included changes:

- Get in Touch has a wider, aligned layout. The description comes before the email, WhatsApp and location details.
- The purple contact marker is repositioned as a subtle glowing pin behind the section label.
- The hero paragraph beneath the role/location text has been removed.
- The hamburger now morphs into a close icon and opens a purple menu via a circular reveal. Navigation rows stagger in, and reverse cleanly when the menu closes.

After replacing the files, run:

```bash
npm run dev
```
