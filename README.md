# Almswell in Unicorn

Run `pnpm install` and `pnpm dev`, then open http://localhost:3000.

The Next.js App Router prerenders the published Almswell routes from TypeScript
React components. The route registry and page and section components are under
`components/almswell`. Tailwind utilities handle shared layout primitives.
`app/almswell.css` preserves the reference design's breakpoint, typography, and
component rules. The original fonts, imagery, and video are served by their CDN.

The mobile menu, FAQ, journal filters, video controls, and form previews use
React client components. Contact and donation submissions show local feedback
only. There is no database, payment processor, or message delivery integration.
