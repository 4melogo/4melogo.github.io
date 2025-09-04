import comp from "/Users/zhangwl/vscode/my-docs/src/.vuepress/.temp/pages/zh/posts/banana/2.html.vue"
const data = JSON.parse("{\"path\":\"/zh/posts/banana/2.html\",\"title\":\"香蕉 2\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"pen-to-square\",\"date\":\"2022-01-06T00:00:00.000Z\",\"category\":[\"香蕉\",\"水果\"],\"tag\":[\"黄\",\"弯曲的\",\"长\"],\"star\":10,\"description\":\"一个被数字 10 星标了的香蕉文章。\"},\"readingTime\":{\"minutes\":0.18,\"words\":55},\"filePathRelative\":\"zh/posts/banana/2.md\",\"excerpt\":\"\\n<p>一个被数字 <code>10</code> 星标了的香蕉文章。</p>\\n\",\"autoDesc\":true}")
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
