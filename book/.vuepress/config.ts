import { defaultTheme } from "@vuepress/theme-default";
import { viteBundler } from "@vuepress/bundler-vite";
import { shikiPlugin } from "@vuepress/plugin-shiki";
import { defineUserConfig } from "vuepress";

import sidebar from "./sidebar";
import { sitemapPlugin } from "@vuepress/plugin-sitemap";

export default defineUserConfig({
  base: process.env.BASE_URL as "/" | `/${string}/`,
  title: "Arduino 教學",
  description: "2023年 Arduino 教學",
  head: [
    ["meta", { charset: "utf-8" }],
    [
      "meta",
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
    ],
    ["link", { rel: "icon", href: "/favicon.png" }],
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "twitter:card", content: "summary" }],
    ["meta", { property: "og:title", content: "Arduino 教學" }],
    [
      "meta",
      {
        property: "og:description",
        content: "2023年 Arduino 教學",
      },
    ],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:url", content: "" }],
    ["meta", { property: "og:locale", content: "zh_TW" }],
  ],
  bundler: viteBundler(),
  theme: defaultTheme({
    sidebar,
    docsRepo: "https://github.com/a3510377/arduino-teaching",
    docsDir: "book",
    editLinkText: "在 GitHub 上編輯此頁面",
    editLink: true,
    contributorsText: "貢獻者",
    lastUpdatedText: "更新日期",
  }),
  plugins: [
    sitemapPlugin({
      hostname: process.env.HOSTNAME ?? "",
    }),
    shikiPlugin({
      langs: ["c", "cpp", "diff"],
      themes: {
        dark: "one-dark-pro",
        light: "catppuccin-latte",
      },
    }),
  ],
});
