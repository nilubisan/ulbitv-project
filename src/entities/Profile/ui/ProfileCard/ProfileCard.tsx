import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'

import styles from './ProfileCard.module.scss'
import { useSelector } from 'react-redux'
import { getProfileData } from '../../model/selectors/selectors'
import { Text } from 'shared/ui/Text/Text'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'

interface ProfileCardProps {
  className?: string
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
  const { t } = useTranslation('profile')

  const data = useSelector(getProfileData)

  return (
        <div className={classNames(styles.ProfileCard, {}, [className])}>
            <div className={styles.header}>
                <Text title={t('Профиль')} />
                <Button theme={ButtonTheme.OUTLINE} className={styles.editBtn}>
                    {t('Редактировать')}
                </Button>
            </div>
            <div className={styles.data}>
                <Input
                    value={data?.firstName}
                    placeholder='Имя'
                    className={styles.input}
                />
                <Input
                    value={data?.lastName}
                    placeholder='Фамилия'
                    className={styles.input}
                />
            </div>
        </div>
  )
}
