import comp from "/Users/zhangwl/vscode/my-docs/src/.vuepress/.temp/pages/posts/apple/1.html.vue"
const data = JSON.parse("{\"path\":\"/posts/apple/1.html\",\"title\":\"Apple 1\",\"lang\":\"en-US\",\"frontmatter\":{\"icon\":\"pen-to-square\",\"date\":\"2022-01-01T00:00:00.000Z\",\"category\":[\"Apple\"],\"tag\":[\"red\",\"big\",\"round\"],\"description\":\"Apple 1 Heading 2 Here is the content. Heading 3 Here is the content.\"},\"readingTime\":{\"minutes\":0.09,\"words\":28},\"filePathRelative\":\"posts/apple/1.md\",\"excerpt\":\"\\n<h2>Heading 2</h2>\\n<p>Here is the content.</p>\\n<h3>Heading 3</h3>\\n<p>Here is the content.</p>\\n\",\"autoDesc\":true}")
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
