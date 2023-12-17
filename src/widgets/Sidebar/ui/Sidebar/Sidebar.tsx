import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Sidebar.module.scss'
import React, { useState } from 'react'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { SidebarItemsList } from '../../model/items'
import { SidebarItem } from './SidebarItem/SidebarItem'

interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false)
  const onToggle = () => { setCollapsed((collapsed) => !collapsed) }

  return (
        <div data-testid='sidebar' className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [className])}>
            <Button className={styles.collapseBtn} theme={ButtonTheme.BACKGROUND_INVERTED} onClick={onToggle}
                    data-testid='sidebar-toggle' square={true} size={ButtonSize.XL}>{collapsed ? '>' : '<'}
            </Button>
            <div className={styles.items}>
                {
                    SidebarItemsList.map((item) => (
                        <SidebarItem item={item} collapsed={collapsed} key={item.path} />
                    ))
                }
            </div>
            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={styles.lng} short={collapsed}/>
            </div>
        </div>
  )
}
