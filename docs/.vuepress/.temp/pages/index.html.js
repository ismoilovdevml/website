export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"Main\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"title\":\"Main\",\"heroImage\":\"/images/hero.png\",\"actions\":[{\"text\":\"Get Started\",\"link\":\"/en/guide/map/\",\"type\":\"primary\"},{\"text\":\"Introduction\",\"link\":\"/en/join/\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"Open Sourse\",\"details\":\"Development of Open Source in Uzbekistan\"},{\"title\":\"Technical Documents\",\"details\":\"Collection of useful technical documents\"},{\"title\":\"Development\",\"details\":\"Good opportunity for development\"}],\"footer\":\"CC0-1.0 Licensed | All rights reserved © 2023 Uzinfocom Open Source\"},\"excerpt\":\"\",\"headers\":[],\"filePathRelative\":\"readme.md\"}")

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
