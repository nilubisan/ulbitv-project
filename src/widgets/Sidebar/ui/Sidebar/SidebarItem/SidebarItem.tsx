import { useTranslation } from 'react-i18next'

import styles from './SidebarItem.module.scss'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import React, { memo } from 'react'
import { type SidebarItemType } from 'widgets/Sidebar/model/items'
import {classNames} from "shared/lib/classNames/classNames";

interface SidebarItemProps {
  item: SidebarItemType
  collapsed: boolean
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
  const { path, text, icon: Icon } = item
  const { t } = useTranslation()

  return (
        <AppLink
            to={path}
            theme={AppLinkTheme.SECONDARY}
            className={classNames(styles.item, {[styles.collapsed]: collapsed})}
        >
            <Icon className={styles.icon} />
            <span className={styles.link}>{t(text)}</span>
        </AppLink>
  )
})
