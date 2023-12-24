import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'

import styles from './ProfileHeader.module.scss'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Text } from 'shared/ui/Text/Text'
import { useSelector } from 'react-redux'
import { getProfileReadonly, profileActions, updateProfileData } from '../../../../entities/Profile'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useCallback } from 'react'

interface ProfileHeaderProps {
  className?: string
}

export const ProfileHeader = ({ className }: ProfileHeaderProps) => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const onEdit = useCallback(
    () => dispatch(profileActions.setReadonly(false)),
    [dispatch]
  )
  const onCancelEdit = useCallback(
    () => dispatch(profileActions.cancelEdit()),
    [dispatch]
  )
  const onSave = useCallback(
    () => dispatch(updateProfileData()),
    [dispatch]
  )

  const readonly = useSelector(getProfileReadonly)

  return (
    <div className={classNames(styles.ProfileHeader, {}, [className])}>
      <Text title={t('Профиль')} />
      {readonly ? (
        <Button
          theme={ButtonTheme.OUTLINE}
          className={styles.editBtn}
          onClick={onEdit}
        >
          {t('Редактировать')}
        </Button>
      ) : (
        <>
          <Button
            theme={ButtonTheme.OUTLINE}
            className={styles.editBtn}
            onClick={onCancelEdit}
          >
            {t('Отменить')}
          </Button>
          <Button
            theme={ButtonTheme.OUTLINE_RED}
            className={styles.saveBtn}
            onClick={onSave}
          >
            {t('Сохранить')}
          </Button>
        </>
      )}
    </div>
  )
}
