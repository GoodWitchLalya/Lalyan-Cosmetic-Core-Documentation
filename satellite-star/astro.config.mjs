// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    site: 'https://goodwitchlalya.github.io',
    base: '/Lalyan-Projects',

    redirects: {
        '/': '/Lalyan-Projects/en/',
        '/kofi': 'https://ko-fi.com/goodwitchlalya',
    },

    integrations: [
       starlight({
          title: 'Lalyan Projects',
          customCss: ['./src/styles/custom.css'],
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
                 label: 'Docs',
                 translations: { it: 'Docs'},
                 items: [
                    { label: 'Mods Index', translations: { it: 'Indice Mods'}, slug: 'mods' },
                 ],
             },
             {

                 label: 'Lalyan Cosmetic Core',
                 translations: { it: 'Lalyan Cosmetic Core'},
                 items: [
                    { label: 'Showcase', translations: { it: 'Presentazione'}, slug: 'mod/lalyan-cosmetic-core' },
                    { label: 'Changelog', translations: { it: 'Changelog'}, slug: 'mod/lalyan-cosmetic-core/changelog' },
                    { label: 'Documentation', translations: { it: 'Documentazione'}, slug: 'mod/lalyan-cosmetic-core/documentation' },
                    { label: 'Resources', translations: { it: 'Risorse'}, slug: 'mod/lalyan-cosmetic-core/resources' },
                 ],
             },
             {

                 label: 'Ancient Golemancy',
                 translations: { it: 'Ancient Golemancy'},
                 items: [
                    { label: 'Showcase', translations: { it: 'Presentazione'}, slug: 'mod/ancient-golemancy' },
                    { label: 'Lore', translations: { it: 'Lore'}, slug: 'mod/ancient-golemancy/lore' },
                    { label: 'Changelog', translations: { it: 'Changelog'}, slug: 'mod/ancient-golemancy/changelog' },
                    { label: 'Guide', translations: { it: 'Guida'}, slug: 'mod/ancient-golemancy/guide' },
                    { label: 'Documentation', translations: { it: 'Documentazione'}, slug: 'mod/ancient-golemancy/documentation' },
                    { label: 'Resources', translations: { it: 'Risorse'}, slug: 'mod/ancient-golemancy/resources' },
                 ],
             },
             {

                  label: 'Legal Notes',
                  translations: { it: 'Note Legali'},
                  items: [
                     { label: 'License (AGPLv3)', translations: { it: 'Licenza (AGPLv3)'}, slug: 'license' },
                  ],
             },
          ],
       }),
    ],
});