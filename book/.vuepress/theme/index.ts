import { Theme } from "vuepress-vite";

import { path } from "@vuepress/utils";

const config: Theme = {
  name: "vuepress-theme",
  layouts: {
    Layout: path.join(__dirname, "layouts/Layout.vue"),
  },
};

export default config;
