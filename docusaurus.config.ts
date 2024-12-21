import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'PlayBook | SNIGDHA OS',
  tagline: 'The official Documentation of Snigdha OS',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://snigdhaos.org/',
  baseUrl: '/playbook/',

  organizationName: 'Snigdha-OS', // GitHub org/user name
  projectName: 'playbook', // Repo name

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Localization settings
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'hi', 'bn'], // English, Hindi, Bengali
    localeConfigs: {
      en: { label: 'English' },
      hi: { label: 'हिन्दी' },
      bn: { label: 'বাংলা' },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          sidebarCollapsible: false,
          routeBasePath: '/', // Set docs as the homepage
          showLastUpdateTime: true,
          editUrl: 'https://github.com/Snigdha-OS/playbook/tree/master/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg', // Social media preview image
    navbar: {
      title: 'PlayBook | SNIGDHA OS',
      logo: {
        alt: 'Snigdha OS Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'localeDropdown', // Language switcher
          position: 'right',
        },
        {
          href: 'https://github.com/Snigdha-OS/',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      // Remove all footer links
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} Snigdha OS. Powered by Tonmoy Infrastructure.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
