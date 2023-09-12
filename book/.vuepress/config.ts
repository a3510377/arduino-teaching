import { defineUserConfig } from "vuepress-vite";

import theme from "./theme";

export default defineUserConfig({
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
  theme,
  plugins: [],
});
