import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'

import styles from './ProfileCard.module.scss'
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text'
import { Input } from 'shared/ui/Input/Input'
import { type Profile } from '../../model/types/profile'
import { Loader } from 'shared/ui/Loader/Loader'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { type Currency, CurrencySelect } from 'entities/Currency'
import { CountrySelect, type Country } from 'entities/Country'

interface ProfileCardProps {
  className?: string
  data?: Profile
  error?: string
  isLoading?: boolean
  onFirstNameChange?: (value: string) => void
  onLastNameChange?: (value: string) => void
  onCityChange?: (value: string) => void
  onAgeChange?: (value: string) => void
  onUsernameChange?: (value: string) => void
  onAvatarChange?: (value: string) => void
  onCurrencyChange?: (currency: Currency) => void
  onCountryChange?: (country: Country) => void
  readonly?: boolean
}

export const ProfileCard = (props: ProfileCardProps) => {
  const {
    className,
    data,
    error,
    isLoading,
    onFirstNameChange,
    onLastNameChange,
    onCityChange,
    onAgeChange,
    onUsernameChange,
    onAvatarChange,
    onCurrencyChange,
    onCountryChange,
    readonly
  } = props
  const { t } = useTranslation('profile')

  if (isLoading) {
    return (
      <div
        className={classNames(styles.ProfileCard, { [styles.loading]: true }, [
          className
        ])}
      >
        <Loader />
      </div>
    )
  }

  if (error) {
    return (
      <div className={classNames(styles.ProfileCard, {}, [styles.error])}>
        <Text
          theme={TextTheme.ERROR}
          title={t('Произошла ошибка при загрузке профиля')}
          text={t('Попробуйте обновить страницу')}
          align={TextAlign.CENTER}
        />
      </div>
    )
  }

  const mods = {
    [styles.editing]: !readonly
  }

  return (
    <div className={classNames(styles.ProfileCard, mods, [className])}>
      <div className={styles.data}>
        {data?.avatar && (
          <div className={styles.avatarWrapper}>
            <Avatar src={data.avatar} alt="avatar" />
          </div>
        )}
        <Input
          placeholder={t('Имя')}
          className={styles.input}
          onChange={onFirstNameChange}
          readonly={readonly}
        />
        <Input
          value={data?.lastName}
          placeholder={t('Фамилия')}
          className={styles.input}
          onChange={onLastNameChange}
          readonly={readonly}
        />
        <Input
          value={data?.age}
          placeholder={t('Возраст')}
          className={styles.input}
          onChange={onAgeChange}
          readonly={readonly}
        />
        <Input
          value={data?.city}
          placeholder={t('Город')}
          className={styles.input}
          onChange={onCityChange}
          readonly={readonly}
        />
        <Input
          value={data?.username}
          placeholder={t('Имя пользователя')}
          className={styles.input}
          onChange={onUsernameChange}
          readonly={readonly}
        />
        <Input
          value={data?.avatar}
          placeholder={t('Ссылка на аватар')}
          className={styles.input}
          onChange={onAvatarChange}
          readonly={readonly}
        />
        <CurrencySelect
          className={styles.input}
          value={data?.currency}
          onChange={onCurrencyChange}
          readonly={readonly}
        />
        <CountrySelect
          className={styles.input}
          value={data?.country}
          onChange={onCountryChange}
          readonly={readonly}
        />
      </div>
    </div>
  )
}
