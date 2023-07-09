import { classNames } from 'shared/lib/classNames/classNames'
import styles from './ThemeSwitcher.module.scss'
import { Theme, useTheme } from 'app/providers/ThemeProvider'
import DarkIcon from 'shared/assets/icons/night.svg'
import LightIcon from 'shared/assets/icons/sun.svg'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme()

  return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(styles.ThemeSwitcher, {}, [className])}
            onClick={toggleTheme}>
            {
                theme === Theme.LIGHT ? <DarkIcon /> : <LightIcon />
            }
        </Button>
  )
}