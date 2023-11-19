import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Sidebar.module.scss'
import React, { useState } from 'react'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { useTranslation } from 'react-i18next'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import HomeIcon from 'shared/assets/icons/home.svg'
import AboutIcon from 'shared/assets/icons/about.svg'

interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false)
  const { t } = useTranslation('navbar')
  const onToggle = () => { setCollapsed((collapsed) => !collapsed) }

  return (
        <div data-testid='sidebar' className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [className])}>
            <Button className={styles.collapseBtn} theme={ButtonTheme.BACKGROUND_INVERTED} onClick={onToggle}
                    data-testid='sidebar-toggle' square={true} size={ButtonSize.XL}>{collapsed ? '>' : '<'}
            </Button>
            <div className={styles.items}>
                    <AppLink
                        to={RoutePath.main}
                        theme={AppLinkTheme.SECONDARY}
                        className={styles.item}
                    >
                        <HomeIcon className={styles.icon} />
                        <span className={styles.link}>{t('Главная')}</span>
                    </AppLink>
                    <AppLink
                        to={RoutePath.about}
                        theme={AppLinkTheme.SECONDARY}
                        className={styles.item}
                    >
                        <AboutIcon className={styles.icon} />
                        <span className={styles.link}>{t('О сайте')}</span>
                    </AppLink>
            </div>
            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={styles.lng} short={collapsed}/>
            </div>
        </div>
  )
}
