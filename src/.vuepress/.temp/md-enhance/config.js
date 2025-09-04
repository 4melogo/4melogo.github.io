import CodeDemo from "/Users/zhangwl/vscode/my-docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.94_markdown-it@14.1.0_sass-embedded@1.90.0_sass@1.9_c8eb0124507e0bd7a073d4b2880ba454/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "/Users/zhangwl/vscode/my-docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.94_markdown-it@14.1.0_sass-embedded@1.90.0_sass@1.9_c8eb0124507e0bd7a073d4b2880ba454/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";

export default {
  enhance: ({ app }) => {
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
  },
};
