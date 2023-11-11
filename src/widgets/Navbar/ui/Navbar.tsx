import React, { useCallback, useState } from 'react'

import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'

import styles from './Navbar.module.scss'
import { useTranslation } from 'react-i18next'
import { Modal } from 'shared/ui/Modal/Modal'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { LoginModal } from 'features/AuthByUsername'

interface NavbarProps {
  className?: string
}
export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation('navbar')
  const [isAuthModal, setIsAuthModal] = useState(false)

  const onModalClose = useCallback(() => { setIsAuthModal(false) }, [])
  const onModalOpen = useCallback(() => { setIsAuthModal(true) }, [])

  return (
        <div className={classNames(styles.navbar, {}, [className])}>
            <Button theme={ButtonTheme.CLEAR_INVERTED} className={styles.links} onClick={onModalOpen}>
                { t('Войти') }
            </Button>
            <LoginModal onClose={onModalClose} isOpen={isAuthModal} />
        </div>
  )
}
