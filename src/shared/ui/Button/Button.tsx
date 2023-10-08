import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Button.module.scss'
import { type ButtonHTMLAttributes, type FC } from 'react'

export enum ThemeButton {
  CLEAR = 'clear',
  OUTLINE = 'outline'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ThemeButton
}

export const Button: FC<ButtonProps> = ({ className, children, theme, ...otherProps }: ButtonProps) => {
  return (
        <button className={classNames(styles.Button, {}, [className, styles[theme ?? '']])} { ...otherProps }>
            {
                children
            }
        </button>
  )
}
