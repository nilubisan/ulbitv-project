import { type FC, type SVGProps } from 'react'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import MainIcon from 'shared/assets/icons/home.svg'
import AboutIcon from 'shared/assets/icons/about.svg'
import ProfileIcon from 'shared/assets/icons/profile.svg'

export interface SidebarItemType {
  path: string
  text: string
  icon: FC<SVGProps<SVGSVGElement>>
  authOnly?: boolean
}

export const SidebarItemsList: SidebarItemType[] = [
  {
    path: RoutePath.main,
    text: 'Главная',
    icon: MainIcon
  },
  {
    path: RoutePath.about,
    text: 'О сайте',
    icon: AboutIcon
  },
  {
    path: RoutePath.profile,
    text: 'Профиль',
    icon: ProfileIcon,
    authOnly: true
  }
]
