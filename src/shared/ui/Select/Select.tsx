import { type ChangeEvent, memo, useMemo } from 'react'
import { classNames, type Mods } from 'shared/lib/classNames/classNames'

import styles from './Select.module.scss'

interface SelectProps {
  className?: string
  label?: string
  options?: SelectOption[]
  value?: string
  onChange?: (value: string) => void
  readonly?: boolean
}

export interface SelectOption {
  value: string
  content: string
}

export const Select = memo(
  ({ className, label, options, onChange, value, readonly }: SelectProps) => {
    const mods: Mods = {}

    const changeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
      onChange?.(e.target.value)
    }

    const optionsList = useMemo(() => {
      return options?.map((opt) => (
        <option key={opt.value} value={opt.value} className={styles.option}>
          {opt.content}
        </option>
      ))
    }, [options])

    return (
      <div className={classNames(styles.wrapper, mods, [className])}>
        {label && <span className={styles.label}>{label + '>'}</span>}
        <select
          className={styles.select}
          value={value}
          onChange={changeHandler}
          disabled={readonly}
        >
          {optionsList}
        </select>
      </div>
    )
  }
)
