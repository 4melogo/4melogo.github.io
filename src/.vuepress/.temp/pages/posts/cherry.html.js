import comp from "/Users/zhangwl/vscode/my-docs/src/.vuepress/.temp/pages/posts/cherry.html.vue"
const data = JSON.parse("{\"path\":\"/posts/cherry.html\",\"title\":\"Cherry\",\"lang\":\"en-US\",\"frontmatter\":{\"icon\":\"pen-to-square\",\"date\":\"2022-01-09T00:00:00.000Z\",\"category\":[\"Cherry\"],\"tag\":[\"red\",\"small\",\"round\"],\"description\":\"Cherry Heading 2 Here is the content. Heading 3 Here is the content.\"},\"readingTime\":{\"minutes\":0.09,\"words\":27},\"filePathRelative\":\"posts/cherry.md\",\"excerpt\":\"\\n<h2>Heading 2</h2>\\n<p>Here is the content.</p>\\n<h3>Heading 3</h3>\\n<p>Here is the content.</p>\\n\",\"autoDesc\":true}")
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
