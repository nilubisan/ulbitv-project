import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Button.module.scss'
import {type ButtonHTMLAttributes, type FC, useContext} from 'react'
import {ThemeContext} from "app/providers/ThemeProvider/lib/ThemeContext";

export enum ThemeButton {
  CLEAR = 'clear',
  OUTLINE = 'outline'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ThemeButton
}

export const Button: FC<ButtonProps> = ({ className, children, theme, ...otherProps }: ButtonProps) => {
  const {theme: myTheme} = useContext(ThemeContext)
  console.log(myTheme)
  return (
        <button className={classNames(styles.Button, {}, [className, styles[theme]])} { ...otherProps }>
            {
                children
            }
        </button>
  )
}
