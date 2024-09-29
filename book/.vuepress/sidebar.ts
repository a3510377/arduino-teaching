import { SidebarOptions } from "@vuepress/theme-default";

export default {
  "/": [
    {
      text: "概述",
      children: ["/what_is_arduino/", "/setup/"],
    },
    {
      text: "創建你的 Arduino",
      children: ["/creating-your-arduino/"],
    },
  ],
} as SidebarOptions;
