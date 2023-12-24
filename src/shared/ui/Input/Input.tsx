import { classNames, type Mods } from 'shared/lib/classNames/classNames'

import styles from './Input.module.scss'
import {
  type ChangeEvent,
  type InputHTMLAttributes,
  memo,
  useEffect,
  useRef,
  useState
} from 'react'

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'readOnly'
>

interface InputProps extends HTMLInputProps {
  className?: string
  value?: string | number
  onChange?: (value: string) => void
  type?: string
  placeholder?: string
  autofocus?: boolean
  readonly?: boolean
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    autofocus,
    readonly,
    ...otherProps
  } = props

  const [isFocused, setIsFocused] = useState(false)
  const [caretPosition, setCaretPosition] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)

  const isCaretVisible = isFocused && !readonly

  useEffect(() => {
    if (autofocus) {
      setIsFocused(true)
      inputRef?.current?.focus()
    }
  }, [autofocus])

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
    setCaretPosition(e.target.value.length)
  }

  const onBlur = () => {
    setIsFocused(false)
  }

  const onFocus = () => {
    setIsFocused(true)
  }

  const onSelect = (e: any) => {
    setCaretPosition(e?.target?.selectionStart || 0)
  }

  const mods: Mods = {
    [styles.readonly]: readonly
  }

  return (
    <div className={classNames(styles.InputWrapper, mods, [className])}>
      {!!placeholder && (
        <div className={styles.placeholder}>{`${placeholder} >`}</div>
      )}
      <div className={styles.caretWrapper}>
        <input
          ref={inputRef}
          type={type}
          value={value}
          onChange={onChangeHandler}
          className={styles.input}
          onFocus={onFocus}
          onBlur={onBlur}
          onSelect={onSelect}
          readOnly={readonly}
          {...otherProps}
        />
        {isCaretVisible && (
          <span
            className={styles.caret}
            style={{ left: `${caretPosition * 8}px` }}
          />
        )}
      </div>
    </div>
  )
})
