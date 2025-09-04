export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/zhangwl/vscode/my-docs/src/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/posts/", { loader: () => import(/* webpackChunkName: "posts_index.html" */"/Users/zhangwl/vscode/my-docs/src/.vuepress/.temp/pages/posts/index.html.js"), meta: {"title":"Posts"} }],
  ["/zh/posts/", { loader: () => import(/* webpackChunkName: "zh_posts_index.html" */"/Users/zhangwl/vscode/my-docs/src/.vuepress/.temp/pages/zh/posts/index.html.js"), meta: {"title":"Posts"} }],
  ["/posts/banana/", { loader: () => import(/* webpackChunkName: "posts_banana_index.html" */"/Users/zhangwl/vscode/my-docs/src/.vuepress/.temp/pages/posts/banana/index.html.js"), meta: {"title":"Banana"} }],
  ["/zh/posts/apple/", { loader: () => import(/* webpackChunkName: "zh_posts_apple_index.html" */"/Users/zhangwl/vscode/my-docs/src/.vuepress/.temp/pages/zh/posts/apple/index.html.js"), meta: {"title":"Apple"} }],
  ["/zh/posts/banana/", { loader: () => import(/* webpackChunkName: "zh_posts_banana_index.html" */"/Users/zhangwl/vscode/my-docs/src/.vuepress/.temp/pages/zh/posts/banana/index.html.js"), meta: {"title":"Banana"} }],
  ["/category/", { loader: () => import(/* webpackChunkName: "category_index.html" */"/Users/zhangwl/vscode/my-docs/src/.vuepress/.temp/pages/category/index.html.js"), meta: {"title":"Category","index":false} }],
  ["/category/guide/", { loader: () => import(/* webpackChunkName: "category_guide_index.html" */"/Users/zhangwl/vscode/my-docs/src/.vuepress/.temp/pages/category/guide/index.html.js"), meta: {"title":"Guide Category","index":false} }],
  ["/category/cherry/", { loader: () => import(/* webpackChunkName: "category_cherry_index.html" */"/Users/zhangwl/vscode/my-docs/src/.vuepress/.temp/pages/category/cherry/index.html.js"), meta: {"title":"Cherry Category","index":false} }],
  ["/category/dragon-fruit/", { loader: () => import(/* webpackChunkName: "category_dragon-fruit_index.html" */"/Users/zhangwl/vscode/my-docs/src/.vuepress/.temp/pages/category/dragon-fruit/index.html.js"), meta: {"title":"Dragon Fruit Category","index":false} }],
  ["/category/fruit/", { loader: () => import(/* webpackChunkName: "category_fruit_index.html" */"/Users/zhangwl/vscode/my-docs/src/.vuepress/.temp/pages/category/fruit/index.html.js"), meta: {"title":"Fruit Category","index":false} }],
  ["/category/strawberry/", { loader: () => import(/* webpackChunkName: "category_strawberry_index.html" */"/Users/zhangwl/vscode/my-docs/src/.vuepress/.temp/pages/category/strawberry/index.html.js"), meta: {"title":"Strawberry Category","index":false} }],
  ["/category/vegetable/", { loader: () => import(/* webpackChunkName: "category_vegetable_index.html" */"/Users/zhangwl/vscode/my-docs/src/.vuepress/.temp/pages/category/vegetable/index.html.js"), meta: {"title":"Vegetable Category","index":false} }],
  ["/category/banana/", { loader: () => import(/* webpackChunkName: "category_banana_index.html" */"/Users/zhangwl/vscode/my-docs/src/.vuepress/.temp/pages/category/banana/index.html.js"), meta: {"title":"Banana Category","index":false} }],
  ["/category/apple/", { loader: () => import(/* webpackChunkName: "category_apple_index.html" */"/Users/zhangwl/vscode/my-docs/src/.vuepress/.temp/pages/category/apple/index.html.js"), meta: {"title":"Apple Category","index":false} }],
  ["/zh/category/", { loader: () => import(/* webpackChunkName: "zh_category_index.html" */"/Users/zhangwl/vscode/my-docs/src/.vuepress/.temp/pages/zh/category/index.html.js"), meta: {"title":"分类","index":false} }],
  ["/zh/category/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/", { loader: () => import(/* webpackChunkName: "zh_category_使用指南_index.html" */"/Users/zhangwl/vscode/my-docs/src/.vuepress/.temp/pages/zh/category/使用指南/index.html.js"), meta: {"title":"使用指南 分类","index":false} }],
  ["/zh/category/%E6%8C%87%E5%8D%97/", { loader: () => import(/* webpackChunkName: "zh_category_指南_index.html" */"/Users/zhangwl/vscode/my-docs/src/.vuepress/.temp/pages/zh/category/指南/index.html.js"), meta: {"title":"指南 分类","index":false} }],
  ["/zh/category/%E6%A8%B1%E6%A1%83/", { loader: () => import(/* webpackChunkName: "zh_category_樱桃_index.html" */"/Users/zhangwl/vscode/my-docs/src/.vuepress/.temp/pages/zh/category/樱桃/index.html.js"), meta: {"title":"樱桃 分类","index":false} }],
  ["/zh/category/%E7%81%AB%E9%BE%99%E6%9E%9C/", { loader: () => import(/* webpackChunkName: "zh_category_火龙果_index.html" */"/Users/zhangwl/vscode/my-docs/src/.vuepress/.temp/pages/zh/category/火龙果/index.html.js"), meta: {"title":"火龙果 分类","index":false} }],
  ["/zh/category/%E6%B0%B4%E6%9E%9C/", { loader: () => import(/* webpackChunkName: "zh_category_水果_index.html" */"/Users/zhangwl/vscode/my-docs/src/.vuepress/.temp/pages/zh/category/水果/index.html.js"), meta: {"title":"水果 分类","index":false} }],
  ["/zh/category/%E8%8D%89%E8%8E%93/", { loader: () => import(/* webpackChunkName: "zh_category_草莓_index.html" */"/Users/zhangwl/vscode/my-docs/src/.vuepress/.temp/pages/zh/category/草莓/index.html.js"), meta: {"title":"草莓 分类","index":false} }],
  ["/zh/category/%E8%94%AC%E8%8F%9C/", { loader: () => import(/* webpackChunkName: "zh_category_蔬菜_index.html" */"/Users/zhangwl/vscode/my-docs/src/.vuepress/.temp/pages/zh/category/蔬菜/index.html.js"), meta: {"title":"蔬菜 分类","index":false} }],
  ["/zh/category/%E8%8B%B9%E6%9E%9C/", { loader: () => import(/* webpackChunkName: "zh_category_苹果_index.html" */"/Users/zhangwl/vscode/my-docs/src/.vuepress/.temp/pages/zh/category/苹果/index.html.js"), meta: {"title":"苹果 分类","index":false} }],
  ["/zh/category/%E9%A6%99%E8%95%89/", { loader: () => import(/* webpackChunkName: "zh_category_香蕉_index.html" */"/Users/zhangwl/vscode/my-docs/src/.vuepress/.temp/pages/zh/category/香蕉/index.html.js"), meta: {"title":"香蕉 分类","index":false} }],
  ["/tag/", { loader: () => import(/* webpackChunkName: "tag_index.html" */"/Users/zhangwl/vscode/my-docs/src/.vuepress/.temp/pages/tag/index.html.js"), meta: {"title":"Tag","index":false} }],
  ["/tag/disable/", { loader: () => import(/* webpackChunkName: "tag_disable_index.html" */"/Users/zhangwl/vscode/my-docs/src/.vuepress/.temp/pages/tag/disable/index.html.js"), meta: {"title":"Tag: disable","index":false} }],
  ["/tag/encryption/", { loader: () => import(/* webpackChunkName: "tag_encryption_index.html" */"/Users/zhangwl/vscode/my-docs/src/.vuepress/.temp/pages/tag/encryption/index.html.js"), meta: {"title":"Tag: encryption","index":false} }],
  ["/tag/layout/", { loader: () => import(/* webpackChunkName: "tag_layout_index.html" */"/Users/zhangwl/vscode/my-docs/src/.vuepress/.temp/pages/tag/layout/index.html.js"), meta: {"title":"Tag: Layout","index":false} }],
  ["/tag/markdown/", { loader: () => import(/* webpackChunkName: "tag_markdown_index.html" */"/Users/zhangwl/vscode/my-docs/src/.vuepress/.temp/pages/tag/markdown/index.html.js"), meta: {"title":"Tag: Markdown","index":false} }],
  ["/tag/page-config/", { loader: () => import(/* webpackChunkName: "tag_page-config_index.html" */"/Users/zhangwl/vscode/my-docs/src/.vuepress/.temp/pages/tag/page-config/index.html.js"), meta: {"title":"Tag: Page config","index":false} }],
  ["/tag/guide/", { loader: () => import(/* webpackChunkName: "tag_guide_index.html" */"/Users/zhangwl/vscode/my-docs/src/.vuepress/.temp/pages/tag/guide/index.html.js"), meta: {"title":"Tag: Guide","index":false} }],
  ["/tag/red/", { loader: () => import(/* webpackChunkName: "tag_red_index.html" */"/Users/zhangwl/vscode/my-docs/src/.vuepress/.temp/pages/tag/red/index.html.js"), meta: {"title":"Tag: red","index":false} }],
  ["/tag/small/", { loader: () => import(/* webpackChunkName: "tag_small_index.html" */"/Users/zhangwl/vscode/my-docs/src/.vuepress/.temp/pages/tag/small/index.html.js"), meta: {"title":"Tag: small","index":false} }],
  ["/tag/round/", { loader: () => import(/* webpackChunkName: "tag_round_index.html" */"/Users/zhangwl/vscode/my-docs/src/.vuepress/.temp/pages/tag/round/index.html.js"), meta: {"title":"Tag: round","index":false} }],
  ["/tag/big/", { loader: () => import(/* webpackChunkName: "tag_big_index.html" */"/Users/zhangwl/vscode/my-docs/src/.vuepress/.temp/pages/tag/big/index.html.js"), meta: {"title":"Tag: big","index":false} }],
  ["/tag/yellow/", { loader: () => import(/* webpackChunkName: "tag_yellow_index.html" */"/Users/zhangwl/vscode/my-docs/src/.vuepress/.temp/pages/tag/yellow/index.html.js"), meta: {"title":"Tag: yellow","index":false} }],
  ["/tag/curly/", { loader: () => import(/* webpackChunkName: "tag_curly_index.html" */"/Users/zhangwl/vscode/my-docs/src/.vuepress/.temp/pages/tag/curly/index.html.js"), meta: {"title":"Tag: curly","index":false} }],
  ["/tag/long/", { loader: () => import(/* webpackChunkName: "tag_long_index.html" */"/Users/zhangwl/vscode/my-docs/src/.vuepress/.temp/pages/tag/long/index.html.js"), meta: {"title":"Tag: long","index":false} }],
  ["/zh/tag/", { loader: () => import(/* webpackChunkName: "zh_tag_index.html" */"/Users/zhangwl/vscode/my-docs/src/.vuepress/.temp/pages/zh/tag/index.html.js"), meta: {"title":"标签","index":false} }],
  ["/zh/tag/%E7%A6%81%E7%94%A8/", { loader: () => import(/* webpackChunkName: "zh_tag_禁用_index.html" */"/Users/zhangwl/vscode/my-docs/src/.vuepress/.temp/pages/zh/tag/禁用/index.html.js"), meta: {"title":"标签: 禁用","index":false} }],
  ["/zh/tag/%E5%8A%A0%E5%AF%86/", { loader: () => import(/* webpackChunkName: "zh_tag_加密_index.html" */"/Users/zhangwl/vscode/my-docs/src/.vuepress/.temp/pages/zh/tag/加密/index.html.js"), meta: {"title":"标签: 加密","index":false} }],
  ["/zh/tag/%E5%B8%83%E5%B1%80/", { loader: () => import(/* webpackChunkName: "zh_tag_布局_index.html" */"/Users/zhangwl/vscode/my-docs/src/.vuepress/.temp/pages/zh/tag/布局/index.html.js"), meta: {"title":"标签: 布局","index":false} }],
  ["/zh/tag/markdown/", { loader: () => import(/* webpackChunkName: "zh_tag_markdown_index.html" */"/Users/zhangwl/vscode/my-docs/src/.vuepress/.temp/pages/zh/tag/markdown/index.html.js"), meta: {"title":"标签: Markdown","index":false} }],
  ["/zh/tag/%E9%A1%B5%E9%9D%A2%E9%85%8D%E7%BD%AE/", { loader: () => import(/* webpackChunkName: "zh_tag_页面配置_index.html" */"/Users/zhangwl/vscode/my-docs/src/.vuepress/.temp/pages/zh/tag/页面配置/index.html.js"), meta: {"title":"标签: 页面配置","index":false} }],
  ["/zh/tag/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/", { loader: () => import(/* webpackChunkName: "zh_tag_使用指南_index.html" */"/Users/zhangwl/vscode/my-docs/src/.vuepress/.temp/pages/zh/tag/使用指南/index.html.js"), meta: {"title":"标签: 使用指南","index":false} }],
  ["/zh/tag/%E7%BA%A2/", { loader: () => import(/* webpackChunkName: "zh_tag_红_index.html" */"/Users/zhangwl/vscode/my-docs/src/.vuepress/.temp/pages/zh/tag/红/index.html.js"), meta: {"title":"标签: 红","index":false} }],
  ["/zh/tag/%E5%B0%8F/", { loader: () => import(/* webpackChunkName: "zh_tag_小_index.html" */"/Users/zhangwl/vscode/my-docs/src/.vuepress/.temp/pages/zh/tag/小/index.html.js"), meta: {"title":"标签: 小","index":false} }],
  ["/zh/tag/%E5%9C%86/", { loader: () => import(/* webpackChunkName: "zh_tag_圆_index.html" */"/Users/zhangwl/vscode/my-docs/src/.vuepress/.temp/pages/zh/tag/圆/index.html.js"), meta: {"title":"标签: 圆","index":false} }],
  ["/zh/tag/%E5%A4%A7/", { loader: () => import(/* webpackChunkName: "zh_tag_大_index.html" */"/Users/zhangwl/vscode/my-docs/src/.vuepress/.temp/pages/zh/tag/大/index.html.js"), meta: {"title":"标签: 大","index":false} }],
  ["/zh/tag/%E9%BB%84/", { loader: () => import(/* webpackChunkName: "zh_tag_黄_index.html" */"/Users/zhangwl/vscode/my-docs/src/.vuepress/.temp/pages/zh/tag/黄/index.html.js"), meta: {"title":"标签: 黄","index":false} }],
  ["/zh/tag/%E5%BC%AF%E6%9B%B2%E7%9A%84/", { loader: () => import(/* webpackChunkName: "zh_tag_弯曲的_index.html" */"/Users/zhangwl/vscode/my-docs/src/.vuepress/.temp/pages/zh/tag/弯曲的/index.html.js"), meta: {"title":"标签: 弯曲的","index":false} }],
  ["/zh/tag/%E9%95%BF/", { loader: () => import(/* webpackChunkName: "zh_tag_长_index.html" */"/Users/zhangwl/vscode/my-docs/src/.vuepress/.temp/pages/zh/tag/长/index.html.js"), meta: {"title":"标签: 长","index":false} }],
  ["/article/", { loader: () => import(/* webpackChunkName: "article_index.html" */"/Users/zhangwl/vscode/my-docs/src/.vuepress/.temp/pages/article/index.html.js"), meta: {"title":"Articles","index":false} }],
  ["/zh/article/", { loader: () => import(/* webpackChunkName: "zh_article_index.html" */"/Users/zhangwl/vscode/my-docs/src/.vuepress/.temp/pages/zh/article/index.html.js"), meta: {"title":"文章","index":false} }],
  ["/star/", { loader: () => import(/* webpackChunkName: "star_index.html" */"/Users/zhangwl/vscode/my-docs/src/.vuepress/.temp/pages/star/index.html.js"), meta: {"title":"Star","index":false} }],
  ["/zh/star/", { loader: () => import(/* webpackChunkName: "zh_star_index.html" */"/Users/zhangwl/vscode/my-docs/src/.vuepress/.temp/pages/zh/star/index.html.js"), meta: {"title":"星标","index":false} }],
  ["/timeline/", { loader: () => import(/* webpackChunkName: "timeline_index.html" */"/Users/zhangwl/vscode/my-docs/src/.vuepress/.temp/pages/timeline/index.html.js"), meta: {"title":"Timeline","index":false} }],
  ["/zh/timeline/", { loader: () => import(/* webpackChunkName: "zh_timeline_index.html" */"/Users/zhangwl/vscode/my-docs/src/.vuepress/.temp/pages/zh/timeline/index.html.js"), meta: {"title":"时间轴","index":false} }],
  ["/demo/markdown.html", { loader: () => import(/* webpackChunkName: "demo_markdown.html" */"/Users/zhangwl/vscode/my-docs/src/.vuepress/.temp/pages/demo/markdown.html.js"), meta: {"title":"","type":"article"} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
