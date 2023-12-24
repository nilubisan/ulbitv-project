import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import styles from './CountrySelect.module.scss'
import { Select } from 'shared/ui/Select/Select'
import { memo, useCallback } from 'react'
import { Country } from '../model/types'

interface CountrySelectProps {
  className?: string
  value?: string
  onChange?: (value: Country) => void
  readonly?: boolean
}

const options = [
  { value: Country.KAZAKHSTAN, content: Country.KAZAKHSTAN },
  { value: Country.RUSSIA, content: Country.RUSSIA }
]

export const CountrySelect = memo(
  ({ className, value, onChange, readonly }: CountrySelectProps) => {
    const { t } = useTranslation()

    const onChangeHandler = useCallback(
      (value: string) => {
        onChange?.(value as Country)
      },
      [onChange]
    )

    return (
      <Select
        className={classNames(styles.CountrySelect, {}, [className])}
        label={t('Укажите страну')}
        options={options}
        value={value}
        onChange={onChangeHandler}
        readonly={readonly}
      />
    )
  }
)
