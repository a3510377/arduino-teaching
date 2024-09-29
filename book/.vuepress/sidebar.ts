import { SidebarOptions } from "@vuepress/theme-default";

export default {
  "/": [
    {
      text: "概述",
      children: ["/what_is_arduino/README.md", "/setup/README.md"],
    },
    {
      text: "創建你的 Arduino",
      children: ["/creating-your-arduino/README.md"],
    },
  ],
} as SidebarOptions;
