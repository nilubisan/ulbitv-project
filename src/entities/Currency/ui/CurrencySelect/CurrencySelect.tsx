import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import styles from './CurrencySelect.module.scss'
import { Currency } from '../../model/types'
import { Select } from 'shared/ui/Select/Select'
import { memo, useCallback } from 'react'

interface CurrencySelectProps {
  className?: string
  value?: string
  onChange?: (value: Currency) => void
  readonly?: boolean
}

const options = [
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.USD, content: Currency.USD }
]

export const CurrencySelect = memo(
  ({ className, value, onChange, readonly }: CurrencySelectProps) => {
    const { t } = useTranslation()

    const onChangeHandler = useCallback(
      (value: string) => {
        onChange?.(value as Currency)
      },
      [onChange]
    )

    return (
      <Select
        className={classNames(styles.CurrencySelect, {}, [className])}
        label={t('Укажите валюту')}
        options={options}
        value={value}
        onChange={onChangeHandler}
        readonly={readonly}
      />
    )
  }
)
