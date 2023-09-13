import { SidebarConfig } from "vuepress-vite";

export default {
  "/": [
    {
      text: "概述",
      children: ["/what_is_arduino.md", "setup.md"],
    },
  ],
  "/reparations/": [{ text: "a" }],
} as SidebarConfig;
