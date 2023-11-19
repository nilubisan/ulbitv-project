import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'

import styles from './LoginForm.module.scss'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { useDispatch, useSelector } from 'react-redux'
import { memo, useCallback } from 'react'
import { loginActions } from '../../model/slice/loginSlice'
import { getLoginState } from '../../model/selectors/getLoginState'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { type ThunkDispatch } from '@reduxjs/toolkit'
import { Text, TextTheme } from 'shared/ui/Text/Text'

interface LoginFormProps {
  className?: string
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation('')
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>()
  const { username, password, isLoading, error } = useSelector(getLoginState)

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value))
  }, [dispatch])

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value))
  }, [dispatch])

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }))
  }, [dispatch, username, password])

  return (
        <div className={classNames(styles.LoginForm, {}, [className])}>
            <Text title={t('Форма авторизации')} />
            {error && <Text text={t('Вы ввели неверный логин или пароль')} theme={TextTheme.ERROR} /> }
            <Input
                className={styles.input}
                type='text'
                placeholder={t('Введите username')}
                autofocus={true} onChange={onChangeUsername}
                value={username}
            />
            <Input
                className={styles.input}
                type='text'
                placeholder={t('Введите пароль')}
                onChange={onChangePassword}
                value={password}
            />
            <Button className={styles.loginBtn} theme={ButtonTheme.OUTLINE} onClick={onLoginClick} disabled={isLoading}>
                {t('Войти')}
            </Button>
        </div>
  )
})
