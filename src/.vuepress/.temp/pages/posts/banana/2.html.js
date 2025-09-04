import comp from "/Users/zhangwl/vscode/my-docs/src/.vuepress/.temp/pages/posts/banana/2.html.vue"
const data = JSON.parse("{\"path\":\"/posts/banana/2.html\",\"title\":\"Banana 2\",\"lang\":\"en-US\",\"frontmatter\":{\"icon\":\"pen-to-square\",\"date\":\"2022-01-06T00:00:00.000Z\",\"category\":[\"Banana\",\"Fruit\"],\"tag\":[\"yellow\",\"curly\",\"long\"],\"star\":10,\"description\":\"A banana article being stared with number 10.\"},\"readingTime\":{\"minutes\":0.14,\"words\":41},\"filePathRelative\":\"posts/banana/2.md\",\"excerpt\":\"\\n<p>A banana article being stared with number <code>10</code>.</p>\\n\",\"autoDesc\":true}")
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
