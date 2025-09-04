import { hasGlobalComponent } from "/Users/zhangwl/vscode/my-docs/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.112_vuepress@2.0.0-rc.24_@vuepress+bundler-vite@2.0.0-rc.24_@_7e555b9af78afb194ba2ef5f6ecc40e7/node_modules/@vuepress/helper/lib/client/index.js";
import Badge from "/Users/zhangwl/vscode/my-docs/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.94_sass-embedded@1.90.0_sass@1.90.0_vuepress@2.0.0-_0b6419fd11e102734680911c737e07bf/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import VPCard from "/Users/zhangwl/vscode/my-docs/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.94_sass-embedded@1.90.0_sass@1.90.0_vuepress@2.0.0-_0b6419fd11e102734680911c737e07bf/node_modules/vuepress-plugin-components/lib/client/components/VPCard.js";

import "/Users/zhangwl/vscode/my-docs/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.112_vuepress@2.0.0-rc.24_@vuepress+bundler-vite@2.0.0-rc.24_@_7e555b9af78afb194ba2ef5f6ecc40e7/node_modules/@vuepress/helper/lib/client/styles/sr-only.css";

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("VPCard")) app.component("VPCard", VPCard);
    
  },
  setup: () => {

  },
  rootComponents: [

  ],
};
