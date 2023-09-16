import { SidebarConfig } from "vuepress-vite";

export default {
  "/": [
    {
      text: "概述",
      children: ["/what_is_arduino.md", "setup.md"],
    },
    {
      text: "創建你的 Arduino",
      children: ["/creating-your-arduino"],
    },
  ],
} as SidebarConfig;
