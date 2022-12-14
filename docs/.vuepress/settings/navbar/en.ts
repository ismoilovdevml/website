import type { NavbarConfig } from '@vuepress/theme-default'
import { version } from '../meta.js'

export const navbarEn: NavbarConfig = [
  {
    text: 'Guide',
    link: '/en/guide/map',
  },
  {
    text: 'Projects',
    link: '/en/project/',
  },
  {
    text: 'Useful',
    children: [
      {
        text: 'At Silicon Valley',
        children: [
          {
            text: 'In Silicon Valley',
            link: 'https://youtu.be/fX87iHCDyr4',
          },
        ],
      },
    ],
  },
  {
    text: 'Donate',
    link: '/en/donate/'
  },
  {
    text: "Contact",
    link: '/en/contact.md'
  }
]