import { hasGlobalComponent } from "/Users/zhangwl/vscode/my-docs/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.112_vuepress@2.0.0-rc.24_@vuepress+bundler-vite@2.0.0-rc.24_@_7e555b9af78afb194ba2ef5f6ecc40e7/node_modules/@vuepress/helper/lib/client/index.js";
import { useScriptTag } from "/Users/zhangwl/vscode/my-docs/node_modules/.pnpm/@vueuse+core@13.7.0_vue@3.5.19/node_modules/@vueuse/core/index.mjs";
import { h } from "vue";
import { VPIcon } from "/Users/zhangwl/vscode/my-docs/node_modules/.pnpm/@vuepress+plugin-icon@2.0.0-rc.112_markdown-it@14.1.0_vuepress@2.0.0-rc.24_@vuepress+bu_adbdd50d69e66769bd05ea6d1362175c/node_modules/@vuepress/plugin-icon/lib/client/index.js"

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("VPIcon")) {
      app.component(
        "VPIcon",
        (props) =>
          h(VPIcon, {
            type: "iconify",
            prefix: "fa6-solid:",
            ...props,
          })
      )
    }
  },
  setup: () => {
    useScriptTag(`https://cdn.jsdelivr.net/npm/iconify-icon@2`);
  },
}
