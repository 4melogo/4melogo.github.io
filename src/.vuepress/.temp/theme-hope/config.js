import { Layout, NotFound, injectDarkMode, setupDarkMode, setupSidebarItems, scrollPromise } from "/Users/zhangwl/vscode/my-docs/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.94_markdown-it@14.1.0_sass-embedded@1.90.0_sass@1.90.0_vue_8d74e3bd643afc87f98e7bf2f73f259d/node_modules/vuepress-theme-hope/lib/bundle/exports/base.js";

import { defineCatalogInfoGetter } from "/Users/zhangwl/vscode/my-docs/node_modules/.pnpm/@vuepress+plugin-catalog@2.0.0-rc.112_vuepress@2.0.0-rc.24_@vuepress+bundler-vite@2.0.0_8652dce7bff75a2175b5f016645f895f/node_modules/@vuepress/plugin-catalog/lib/client/index.js"
import { h } from "vue"
import { resolveComponent } from "vue"
import { Blog, BloggerInfo, SocialMedias, setupBlog } from "/Users/zhangwl/vscode/my-docs/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.94_markdown-it@14.1.0_sass-embedded@1.90.0_sass@1.90.0_vue_8d74e3bd643afc87f98e7bf2f73f259d/node_modules/vuepress-theme-hope/lib/bundle/exports/blog.js";
import "/Users/zhangwl/vscode/my-docs/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.94_markdown-it@14.1.0_sass-embedded@1.90.0_sass@1.90.0_vue_8d74e3bd643afc87f98e7bf2f73f259d/node_modules/vuepress-theme-hope/lib/bundle/styles/blog/bundle.scss";
import { GlobalEncrypt, LocalEncrypt } from "/Users/zhangwl/vscode/my-docs/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.94_markdown-it@14.1.0_sass-embedded@1.90.0_sass@1.90.0_vue_8d74e3bd643afc87f98e7bf2f73f259d/node_modules/vuepress-theme-hope/lib/bundle/exports/encrypt.js";
import "/Users/zhangwl/vscode/my-docs/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.94_markdown-it@14.1.0_sass-embedded@1.90.0_sass@1.90.0_vue_8d74e3bd643afc87f98e7bf2f73f259d/node_modules/vuepress-theme-hope/lib/bundle/styles/encrypt/bundle.scss"

import "/Users/zhangwl/vscode/my-docs/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.112_vuepress@2.0.0-rc.24_@vuepress+bundler-vite@2.0.0-rc.24_@_7e555b9af78afb194ba2ef5f6ecc40e7/node_modules/@vuepress/helper/lib/client/styles/colors.css";
import "/Users/zhangwl/vscode/my-docs/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.112_vuepress@2.0.0-rc.24_@vuepress+bundler-vite@2.0.0-rc.24_@_7e555b9af78afb194ba2ef5f6ecc40e7/node_modules/@vuepress/helper/lib/client/styles/normalize.css";
import "/Users/zhangwl/vscode/my-docs/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.112_vuepress@2.0.0-rc.24_@vuepress+bundler-vite@2.0.0-rc.24_@_7e555b9af78afb194ba2ef5f6ecc40e7/node_modules/@vuepress/helper/lib/client/styles/sr-only.css";
import "/Users/zhangwl/vscode/my-docs/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.94_markdown-it@14.1.0_sass-embedded@1.90.0_sass@1.90.0_vue_8d74e3bd643afc87f98e7bf2f73f259d/node_modules/vuepress-theme-hope/lib/bundle/styles/bundle.scss";

defineCatalogInfoGetter((meta) => {
  const title = meta.title;
  const shouldIndex = meta.index ?? true;
  const icon = meta.icon;

  return shouldIndex ? {
    title,
    content: icon ? () =>[h(resolveComponent("VPIcon"), { icon, sizing: "both" }), title] : null,
    order: meta.order,
    index: meta.index,
  } : null;
});

export default {
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;

    router.options.scrollBehavior = async (...args) => {
      await scrollPromise.wait();

      return scrollBehavior(...args);
    };

    // inject global properties
    injectDarkMode(app);

    app.component("BloggerInfo", BloggerInfo);
    app.component("SocialMedias", SocialMedias);
    app.component("GlobalEncrypt", GlobalEncrypt);
    app.component("LocalEncrypt", LocalEncrypt);
  },
  setup: () => {
    setupDarkMode();
    setupSidebarItems();
    setupBlog();
  },
  layouts: {
    Layout,
    NotFound,
    Blog,
  }
};
