import React, { useCallback, useState } from 'react'

import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'

import styles from './Navbar.module.scss'
import { useTranslation } from 'react-i18next'
import { Modal } from 'shared/ui/Modal/Modal'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'

interface NavbarProps {
  className?: string
}
export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation('navbar')
  const [isAuthModal, setIsAuthModal] = useState(false)

  const onToggleModal = useCallback(() => { setIsAuthModal((prev) => !prev) }, [])
  return (
        <div className={classNames(styles.navbar, {}, [className])}>
            <Button theme={ButtonTheme.CLEAR_INVERTED} className={styles.links} onClick={onToggleModal}>
                { t('Войти') }
            </Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum
            </Modal>
        </div>
  )
}
