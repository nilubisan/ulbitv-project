import { classNames } from 'shared/lib/classNames/classNames'
import styles from './PageError.module.scss'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'

interface PageErrorProps {
  className?: string
}

export const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation()

  const onPageReload = () => { location.reload() }

  return (
        <div className={classNames(styles.PageError, {}, [className])}>
            {t('Произошла непредвиденная ошибка')}
            <Button className={styles.btn} onClick={onPageReload}>{t('Перезагрузить страницу')}</Button>
        </div>
  )
}
