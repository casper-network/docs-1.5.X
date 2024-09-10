// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config
const globalConfig = require("./global.config.js");
const announcementBarConfig = require("./config/announcementBar.config.js");
const githubPagesConfig = require("./config/github-pages.config.js");

const {
  themeNavbarConfig,
  themeFooterConfig,
  themeAlgoliaConfig,
} = require("./config");

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Casper Docs - Redux",
  tagline: "Casper Documentation",
  favicon: "icon/favicon.ico",
  url: globalConfig.siteUrl,
  baseUrl: globalConfig.baseUrl,
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  ...githubPagesConfig,
  // organizationName: 'casper-devrel',
  // projectName: 'docs-redux',
  // deploymentBranch: 'gh-pages',
  trailingSlash: true,
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  onDuplicateRoutes: "throw",
  markdown: {
    format: "detect",
  },
  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  // i18n: {
  //   defaultLocale: 'en',
  //   locales: ['en'],
  // },
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        theme: {
          customCss: "./src/css/custom.css",
        },
        docs: {
          path: "docs",
          sidebarPath: "./config/sidebar.config.js",
          //sidebarPath: './sidebars.auto.js',
          routeBasePath: !globalConfig.routePrefix
            ? "/"
            : globalConfig.routePrefix, // IMPORTANT: Turn on docs-only mode
          exclude: [
            "./contract-dsl/archived",
            "./economics/archived",
            "./theory",
          ],
        },
        blog: {
          path: "./blog",
          routeBasePath: "blog",
          blogTitle: "Casper Developer Relations Blog",
          blogDescription:
            "A blog about all things to do with developing on the Casper Blockchain",
          postsPerPage: "ALL",
          blogSidebarTitle: "All posts",
          blogSidebarCount: "ALL",
        },
        // pages: {
        //   path: 'src/pages',
        //   routeBasePath: '',
        //   include: ['**/*.{js,jsx,ts,tsx,md,mdx}'],
        //   exclude: [
        //     '**/_*.{js,jsx,ts,tsx,md,mdx}',
        //     '**/_*/**',
        //     '**/*.test.{js,jsx,ts,tsx}',
        //     '**/__tests__/**',
        //   ],
        //   mdxPageComponent: '@theme/MDXPage',
        //   remarkPlugins: [require('./my-remark-plugin')],
        //   rehypePlugins: [],
        //   beforeDefaultRemarkPlugins: [],
        //   beforeDefaultRehypePlugins: [],
        // },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      algolia: themeAlgoliaConfig,
      navbar: themeNavbarConfig,
      footer: themeFooterConfig,
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      announcementBar: announcementBarConfig,
    }),
};

export default config;
