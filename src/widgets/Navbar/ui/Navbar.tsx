import React from 'react'

import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'

import styles from './Navbar.module.scss'
import { useTranslation } from 'react-i18next'

interface NavbarProps {
  className?: string
}
export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation('navbar')

  return (
        <div className={classNames(styles.navbar, {}, [className])}>
            <div className={styles.links}>

            </div>
        </div>
  )
}
