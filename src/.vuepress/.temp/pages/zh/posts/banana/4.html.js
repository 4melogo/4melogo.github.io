import comp from "/Users/zhangwl/vscode/my-docs/src/.vuepress/.temp/pages/zh/posts/banana/4.html.vue"
const data = JSON.parse("{\"path\":\"/zh/posts/banana/4.html\",\"title\":\"香蕉 4\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"pen-to-square\",\"date\":\"2022-01-08T00:00:00.000Z\",\"category\":[\"香蕉\"],\"tag\":[\"黄\",\"弯曲的\",\"长\"],\"description\":\"香蕉 4 标题 2 这里是内容。 标题 3 这里是内容。\"},\"readingTime\":{\"minutes\":0.12,\"words\":36},\"filePathRelative\":\"zh/posts/banana/4.md\",\"excerpt\":\"\\n<h2>标题 2</h2>\\n<p>这里是内容。</p>\\n<h3>标题 3</h3>\\n<p>这里是内容。</p>\\n\",\"autoDesc\":true}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
