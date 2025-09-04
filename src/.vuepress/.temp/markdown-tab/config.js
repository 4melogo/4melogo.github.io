import { CodeTabs } from "/Users/zhangwl/vscode/my-docs/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.112_markdown-it@14.1.0_vuepress@2.0.0-rc.24_@vue_7b06116bc5ab61495f1f9f0b0d5d28b0/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "/Users/zhangwl/vscode/my-docs/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.112_markdown-it@14.1.0_vuepress@2.0.0-rc.24_@vue_7b06116bc5ab61495f1f9f0b0d5d28b0/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "/Users/zhangwl/vscode/my-docs/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.112_markdown-it@14.1.0_vuepress@2.0.0-rc.24_@vue_7b06116bc5ab61495f1f9f0b0d5d28b0/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
