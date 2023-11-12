import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'

import styles from './LoginForm.module.scss'
import { Button } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'

interface LoginFormProps {
  className?: string
}

export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation()

  return (
        <div className={classNames(styles.LoginForm, {}, [className])}>
            <Input className={styles.input} type='text' placeholder={t('Введите username')} autofocus={true} />
            <Input className={styles.input} type='text' placeholder={t('Введите пароль')}/>
            <Button className={styles.loginBtn}>
                {t('Войти')}
            </Button>
        </div>
  )
}
