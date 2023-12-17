import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'

interface ProfilePageProps {
  className?: string
}

export const ProfilePage = ({ className }: ProfilePageProps) => {
  const { t } = useTranslation()

  return (
        <div className={classNames('', {}, [className])}>
            {t('PROFILE PAGE')}
        </div>
  )
}
