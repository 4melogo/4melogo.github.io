import comp from "/Users/zhangwl/vscode/my-docs/src/.vuepress/.temp/pages/posts/banana/3.html.vue"
const data = JSON.parse("{\"path\":\"/posts/banana/3.html\",\"title\":\"Banana 3\",\"lang\":\"en-US\",\"frontmatter\":{\"icon\":\"pen-to-square\",\"date\":\"2022-01-07T00:00:00.000Z\",\"category\":[\"Banana\"],\"tag\":[\"yellow\",\"curly\",\"long\"],\"description\":\"Banana 3 Heading 2 Here is the content. Heading 3 Here is the content.\"},\"readingTime\":{\"minutes\":0.09,\"words\":28},\"filePathRelative\":\"posts/banana/3.md\",\"excerpt\":\"\\n<h2>Heading 2</h2>\\n<p>Here is the content.</p>\\n<h3>Heading 3</h3>\\n<p>Here is the content.</p>\\n\",\"autoDesc\":true}")
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
