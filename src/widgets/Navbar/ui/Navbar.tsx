import React, {memo, useCallback, useState} from 'react'

import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Navbar.module.scss'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { LoginModal } from 'features/AuthByUsername'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAuthData, userActions } from '../../../entities/User'

interface NavbarProps {
  className?: string
}
export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation('navbar')
  const [isAuthModal, setIsAuthModal] = useState(false)
  const dispatch = useDispatch()
  const authData = useSelector(getUserAuthData)

  const onModalClose = useCallback(() => { setIsAuthModal(false) }, [])
  const onModalOpen = useCallback(() => { setIsAuthModal(true) }, [])
  const onLogout = useCallback(() => {
    dispatch(userActions.logout())
  }, [dispatch])

  if (authData != null) {
    return (
    <div className={classNames(styles.navbar, {}, [className])}>
        <Button theme={ButtonTheme.CLEAR_INVERTED} className={styles.links} onClick={onLogout}>
            { t('Выйти') }
        </Button>
    </div>
    )
  }

  return (
        <div className={classNames(styles.navbar, {}, [className])}>
            <Button theme={ButtonTheme.CLEAR_INVERTED} className={styles.links} onClick={onModalOpen}>
                { t('Войти') }
            </Button>
            { isAuthModal && <LoginModal onClose={onModalClose} isOpen={isAuthModal} /> }
        </div>
  )
})
