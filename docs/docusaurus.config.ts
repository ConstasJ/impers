import { createRequire } from "node:module";
import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const require = createRequire(import.meta.url);
const { version: packageVersion } = require("../package.json") as { version: string };

const config: Config = {
  title: "impers",
  tagline: "Node.js binding for libcurl, with browser impersonation",
  customFields: {
    packageVersion,
  },

  url: "https://lexiforest.github.io",
  baseUrl: "/impers/",

  organizationName: "lexiforest",
  projectName: "impers",
  trailingSlash: false,

  onBrokenLinks: "throw",

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "warn",
    },
  },

  future: {
    v4: true,
  },

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/lexiforest/impers/edit/main/docs/",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      "docusaurus-plugin-typedoc",
      {
        entryPoints: ["../src/index.ts"],
        tsconfig: "../tsconfig.json",
        out: "docs/api",
        readme: "none",
        excludePrivate: true,
        excludeInternal: true,
        sidebar: {
          autoConfiguration: false,
        },
      },
    ],
  ],

  themeConfig: {
    announcementBar: {
      id: `version-${packageVersion}`,
      content: `These docs are built from <code>impers</code> v${packageVersion} on <code>main</code>. APIs are provisional and may change between versions.`,
      backgroundColor: "#fff8c5",
      textColor: "#1f2328",
      isCloseable: true,
    },
    navbar: {
      title: "impers",
      items: [
        {
          type: "html",
          position: "right",
          value: `<span class="navbar__version-badge">v${packageVersion}</span>`,
        },
        {
          type: "docSidebar",
          sidebarId: "docsSidebar",
          position: "left",
          label: "Docs",
        },
        {
          href: "https://github.com/lexiforest/impers",
          label: "GitHub",
          position: "right",
        },
        {
          href: "https://www.npmjs.com/package/impers",
          label: "npm",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            { label: "Introduction", to: "/" },
            { label: "API Reference", to: "/api" },
          ],
        },
        {
          title: "Project",
          items: [
            { label: "GitHub", href: "https://github.com/lexiforest/impers" },
            { label: "npm", href: "https://www.npmjs.com/package/impers" },
            { label: "Issues", href: "https://github.com/lexiforest/impers/issues" },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} lexiforest. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["bash", "json"],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
