import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarUz: SidebarConfig = {
  '/guide/': [
    {
      text: 'Guide',
      children: [
        '/guide/README.md',
      ],
    },
  ],
}