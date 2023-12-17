import { classNames } from 'shared/lib/classNames/classNames'
import styles from './AppLink.module.scss'
import { Link, type LinkProps } from 'react-router-dom'
import { memo, type ReactNode } from 'react'

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
  className?: string
  theme?: AppLinkTheme
  children?: ReactNode
}

export const AppLink = memo((props: AppLinkProps) => {
  const { to, className, children, theme = AppLinkTheme.PRIMARY, ...otherProps } = props

  return (
        <Link
            to={to}
            className={classNames(styles.AppLink, { theme }, [className, styles[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
  )
})
