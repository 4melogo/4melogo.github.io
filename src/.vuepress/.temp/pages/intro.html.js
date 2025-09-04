import comp from "/Users/zhangwl/vscode/my-docs/src/.vuepress/.temp/pages/intro.html.vue"
const data = JSON.parse("{\"path\":\"/intro.html\",\"title\":\"Intro Page\",\"lang\":\"en-US\",\"frontmatter\":{\"icon\":\"circle-info\",\"cover\":\"/assets/images/cover3.jpg\",\"description\":\"Intro Page Place your introduction and profile here.\"},\"readingTime\":{\"minutes\":0.04,\"words\":13},\"filePathRelative\":\"intro.md\",\"excerpt\":\"\\n<p>Place your introduction and profile here.</p>\\n\",\"autoDesc\":true}")
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
