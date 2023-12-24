import { classNames } from 'shared/lib/classNames/classNames'
import {
  DynamicModuleLoader,
  type ReducersList
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import {
  fetchProfileData,
  getProfileForm,
  getProfileReadonly,
  profileActions,
  ProfileCard,
  profileReducer,
  getProfileError,
  getProfileIsLoading,
  getProfileValidateErrors,
  ValidateProfileError
} from '../../../entities/Profile'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { ProfileHeader } from './ProfileHeader/ProfileHeader'
import { type Currency } from 'entities/Currency'
import { type Country } from 'entities/Country'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'

const reducers: ReducersList = {
  profile: profileReducer
}

interface ProfilePageProps {
  className?: string
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  const { t } = useTranslation('profile')
  const dispatch = useAppDispatch()
  const formData = useSelector(getProfileForm)
  const error = useSelector(getProfileError)
  const isLoading = useSelector(getProfileIsLoading)
  const readonly = useSelector(getProfileReadonly)
  const validateErrors = useSelector(getProfileValidateErrors)

  const validateErrorsTranslates = {
    [ValidateProfileError.SERVER_ERROR]: t('Серверная ошибка при сохранении'),
    [ValidateProfileError.INCORRECT_AGE]: t('Некорректный возраст'),
    [ValidateProfileError.INCORRECT_COUNTRY]: t('Некорректная страна'),
    [ValidateProfileError.INCORRECT_USER_DATA]: t(
      'Некорректные данные пользователя'
    ),
    [ValidateProfileError.NO_DATA]: t('Нет данных')
  }

  useEffect(() => {
    dispatch(fetchProfileData())
  }, [dispatch])

  const onFirstNameChange = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ firstName: value ?? '' }))
    },
    [dispatch]
  )

  const onLastNameChange = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ lastName: value ?? '' }))
    },
    [dispatch]
  )

  const onAgeChange = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ age: +value ?? 0 }))
    },
    [dispatch]
  )

  const onCityChange = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ city: value ?? '' }))
    },
    [dispatch]
  )

  const onAvatarChange = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ avatar: value ?? '' }))
    },
    [dispatch]
  )

  const onUsernameChange = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ username: value ?? '' }))
    },
    [dispatch]
  )

  const onCurrencyChange = useCallback(
    (currency: Currency) => {
      dispatch(profileActions.updateProfile({ currency: currency ?? '' }))
    },
    [dispatch]
  )

  const onCountryChange = useCallback(
    (country: Country) => {
      console.log(country)
      dispatch(profileActions.updateProfile({ country: country ?? '' }))
    },
    [dispatch]
  )

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
      <div className={classNames('', {}, [className])}>
        <ProfileHeader />
        <>
          {validateErrors?.length &&
            validateErrors.map((error) => (
              <Text
                key={error}
                theme={TextTheme.ERROR}
                text={validateErrorsTranslates[error]}
              />
            ))}
        </>
        <ProfileCard
          data={formData}
          isLoading={isLoading}
          error={error}
          onFirstNameChange={onFirstNameChange}
          onLastNameChange={onLastNameChange}
          onAgeChange={onAgeChange}
          onCityChange={onCityChange}
          onAvatarChange={onAvatarChange}
          onUsernameChange={onUsernameChange}
          onCurrencyChange={onCurrencyChange}
          onCountryChange={onCountryChange}
          readonly={readonly}
        />
      </div>
    </DynamicModuleLoader>
  )
}

export default ProfilePage
