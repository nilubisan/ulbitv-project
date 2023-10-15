import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Button.module.scss'
import { type ButtonHTMLAttributes, type FC } from 'react'

export enum ButtonTheme {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ButtonTheme
  square?: boolean
  size?: ButtonSize
}

export const Button: FC<ButtonProps> = ({ className, children, theme, square = false, size = ButtonSize.M, ...otherProps }: ButtonProps) => {

  const mods: Record<string, boolean> = {
    [styles[theme ?? '']]: true,
    [styles.square]: !!square,
    [styles[size]]: true
  }

  return (
        <button className={classNames(styles.Button, mods, [className])} { ...otherProps }>
            {
                children
            }
        </button>
  )
}
