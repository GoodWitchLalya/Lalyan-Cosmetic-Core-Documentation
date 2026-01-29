// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    site: 'https://goodwitchlalya.github.io',
    base: '/Lalyan-Documentation',

    redirects: {
        '/': '/Lalyan-Documentation/en/',
    },

    integrations: [
       starlight({
          title: 'Lalyan Documentation',
          defaultLocale: 'en',
          locales: {
              en: { label: 'English', lang: 'en' },
              it: { label: 'Italiano', lang: 'it' },
          },
          social: [
             {
                icon: 'github',
                label: 'GitHub',
                href: 'https://github.com/goodwitchlalya'
             }
          ],
          sidebar: [
             {
                label: 'Legal Notes',
                items: [
                   { label: 'License (AGPLv3)', slug: 'license' },
                ],
             },
          ],
       }),
    ],
});