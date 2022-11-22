import type { NavbarConfig } from '@vuepress/theme-default'
import { version } from '../meta.js'

export const navbarUz: NavbarConfig = [
  {
    text: 'Qo\'llanma',
    link: '/uz/guide/map',
  },
  {
    text: 'Loyihalar',
    link: '/uz/wip/',
  },
  {
    text: 'Foydali',
    children: [
      {
        text: 'Silikon Vodiysida',
        children: [
          {
            text: 'Silikon Vodiysida',
            link: 'https://youtu.be/fX87iHCDyr4',
          },
        ],
      },
    ],
  },
  {
    text: 'Donate',
    link: '/uz/donate/'
  }
]