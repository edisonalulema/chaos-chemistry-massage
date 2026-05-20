# Chaos & Chemistry Massage and Bodywork

Marketing website for Chaos & Chemistry Massage and Bodywork — therapeutic
massage practice serving Granby and Winter Park, Colorado.

Built with **Astro + Tailwind CSS** for maximum SEO and minimum JavaScript.

## Tech stack

- [Astro 6](https://astro.build) — static site generator, ships zero JS by default
- [Tailwind CSS v4](https://tailwindcss.com) via the Vite plugin
- [astro-seo](https://github.com/jonasmerlin/astro-seo) — meta + Open Graph
- [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/) — auto-generated sitemap
- JSON-LD `MassageTherapy` schema with both locations baked into every page

## Local development

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs ./dist
npm run preview  # serves the built site
```

## Deploying to Vercel

The fastest path:

1. Push this repo to GitHub.
2. In Vercel, **Import Project** → select the repo.
3. Vercel auto-detects Astro. No config needed.
4. Add the custom domain `chaoschemistrymassage.com` under **Project Settings → Domains**.
5. Update DNS at the registrar to point to Vercel.

Or via CLI:

```sh
npx vercel
npx vercel --prod
```

## SEO setup checklist

After first deploy:

- [ ] Submit `https://chaoschemistrymassage.com/sitemap-index.xml` to
      [Google Search Console](https://search.google.com/search-console).
- [ ] Submit to [Bing Webmaster Tools](https://www.bing.com/webmasters).
- [ ] Claim/update **Google Business Profile** for both locations and link the
      website. This is the single biggest local SEO lever.
- [ ] Add the practice to **Yelp**, **Apple Maps**, and the local **Granby
      Chamber of Commerce** directory.
- [ ] Replace `/public/sarah.jpg` and the hero photo with optimized versions
      if higher-quality originals are available.
- [ ] Create `og-image.jpg` (1200×630) for social sharing — currently the SEO
      layout references `/og-image.jpg` which doesn't exist yet.

## Future enhancements

- **Blog**: add `src/content/blog/` with MDX posts for long-tail SEO (e.g.,
  "Massage Recovery for Skiers in Winter Park", "What is Craniosacral Therapy?").
- **Pricing page**: helps both SEO and reduces no-shows.
- **Testimonials**: pull from Google reviews when available.
- **CMS** (if Sarah wants to edit content herself): Decap CMS (free) or Sanity.

## Project structure

```
src/
├── assets/        # Optimized images (Astro processes these)
├── components/    # Nav, Footer
├── layouts/       # Layout.astro — SEO meta + JSON-LD schema
├── pages/
│   ├── index.astro
│   ├── services.astro
│   ├── about.astro
│   ├── contact.astro
│   └── locations/
│       ├── granby.astro
│       └── winter-park.astro
└── styles/
    └── global.css

public/            # Static files served as-is (robots.txt, favicons, sarah.jpg)
```
