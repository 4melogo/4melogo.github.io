import comp from "/Users/zhangwl/vscode/my-docs/src/.vuepress/.temp/pages/zh/posts/cherry.html.vue"
const data = JSON.parse("{\"path\":\"/zh/posts/cherry.html\",\"title\":\"樱桃\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"pen-to-square\",\"date\":\"2022-01-09T00:00:00.000Z\",\"category\":[\"樱桃\"],\"tag\":[\"红\",\"小\",\"圆\"],\"description\":\"樱桃 标题 2 这里是内容。 标题 3 这里是内容。\"},\"readingTime\":{\"minutes\":0.11,\"words\":33},\"filePathRelative\":\"zh/posts/cherry.md\",\"excerpt\":\"\\n<h2>标题 2</h2>\\n<p>这里是内容。</p>\\n<h3>标题 3</h3>\\n<p>这里是内容。</p>\\n\",\"autoDesc\":true}")
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
