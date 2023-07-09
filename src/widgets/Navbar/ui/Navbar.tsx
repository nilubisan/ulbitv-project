import React from 'react'

import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'

import styles from './Navbar.module.scss'

interface NavbarProps {
  className?: string
}
export const Navbar = ({ className }: NavbarProps) => {
  return (
        <div className={classNames(styles.navbar, {}, [className])}>
            <div className={styles.links}>
                <AppLink
                    to='/'
                    theme={AppLinkTheme.SECONDARY}
                    className={styles.mainLink}
                >
                    Главная
                </AppLink>
                <AppLink
                    to='/about'
                    theme={AppLinkTheme.SECONDARY}
                >
                    О сайте
                </AppLink>
            </div>
        </div>
  )
}
