export const themeData = JSON.parse("{\"logo\":\"/images/hero.png\",\"repo\":\"ismoilovdevml/website\",\"docsDir\":\"docs\",\"locales\":{\"/\":{\"navbar\":[{\"text\":\"Guide\",\"link\":\"/guide/\"},{\"text\":\"Projects\",\"link\":\"/wip/\"},{\"text\":\"Useful\",\"children\":[{\"text\":\"At Silicon Valley\",\"children\":[{\"text\":\"In Silicon Valley\",\"link\":\"https://youtu.be/fX87iHCDyr4\"}]}]},{\"text\":\"Donate\",\"link\":\"uz/donate/\"}],\"sidebar\":{\"/guide/\":[{\"text\":\"Guide\",\"children\":[\"/guide/README.md\"]}]},\"editLinkText\":\"Edit this page on GitHub\",\"selectLanguageName\":\"English\"},\"/uz/\":{\"navbar\":[{\"text\":\"Qo'llanma\",\"link\":\"/uz/guide/map\"},{\"text\":\"Loyihalar\",\"link\":\"/uz/wip/\"},{\"text\":\"Foydali\",\"children\":[{\"text\":\"Silikon Vodiysida\",\"children\":[{\"text\":\"Silikon Vodiysida\",\"link\":\"https://youtu.be/fX87iHCDyr4\"}]}]},{\"text\":\"Donate\",\"link\":\"/uz/donate/\"}],\"selectLanguageName\":\"O'zbek\",\"selectLanguageText\":\"Tillar\",\"selectLanguageAriaLabel\":\"Tillar\",\"sidebar\":{\"/guide/\":[{\"text\":\"Guide\",\"children\":[\"/guide/README.md\"]}]},\"editLinkText\":\"GitHub da o'zgartirish\",\"lastUpdatedText\":\"Oxirgi yangilanish\",\"contributorsText\":\"Hissa qo'shganlar\",\"tip\":\"Yordam\",\"warning\":\"Ogohlantiruv\",\"danger\":\"Ehtiyot bo'ling\",\"notFound\":[\"Siz bu yerdalarda nimalar qilib yuribsiz?\",\"Mazzami sizlarga?!\"],\"backToHome\":\"Orqaga qaytish\",\"openInNewWindow\":\"Yangi oynada ochish\",\"toggleColorMode\":\"Rang rejimini o'zgartirish\",\"toggleSidebar\":\"Yon panel yoqish\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"navbar\":[],\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebar\":\"auto\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
