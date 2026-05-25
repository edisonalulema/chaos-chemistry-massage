// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const SITE = 'https://chaoschemistrymassage.com';

const PAGE_IMAGES = {
  [`${SITE}/`]: [
    { url: `${SITE}/sarah.jpg`, caption: 'Sarah, licensed massage therapist at Chaos & Chemistry Massage' },
  ],
  [`${SITE}/about/`]: [
    { url: `${SITE}/sarah.jpg`, caption: 'Sarah, licensed massage therapist at Chaos & Chemistry Massage' },
  ],
  [`${SITE}/locations/granby/`]: [
    { url: `${SITE}/photos/granby/exterior.jpg`, caption: 'Exterior of Mana Acupuncture, Granby, Colorado' },
    { url: `${SITE}/photos/granby/reception.jpg`, caption: 'Reception area at Mana Acupuncture, Granby, Colorado' },
    { url: `${SITE}/photos/granby/treatment-room.jpg`, caption: 'Massage treatment room in Granby, Colorado' },
  ],
  [`${SITE}/locations/winter-park/`]: [
    { url: `${SITE}/photos/winter-park/reception.jpg`, caption: 'Reception at Blue Sky Massage, Winter Park, Colorado' },
    { url: `${SITE}/photos/winter-park/treatment-room.jpg`, caption: 'Massage treatment room in Winter Park, Colorado' },
    { url: `${SITE}/photos/winter-park/couples-room.jpg`, caption: 'Couples massage room in Winter Park, Colorado' },
  ],
};

export default defineConfig({
  site: SITE,
  integrations: [
    sitemap({
      serialize(item) {
        const images = PAGE_IMAGES[item.url];
        if (images) {
          item.img = images;
        }
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    responsiveStyles: true,
  },
});
