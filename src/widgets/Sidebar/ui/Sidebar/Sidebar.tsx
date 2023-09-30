import {classNames} from 'shared/lib/classNames/classNames'
import styles from './Sidebar.module.scss'
import {useState} from 'react'
import {ThemeSwitcher} from 'widgets/ThemeSwitcher'
import {LangSwitcher} from 'widgets/LangSwitcher'
import {useTranslation} from 'react-i18next'
import {Button, ThemeButton} from "shared/ui/Button/Button";

interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false)
  const { t } = useTranslation()
  const onToggle = () => { setCollapsed((collapsed) => !collapsed) }

  return (
        <div data-testid='sidebar' className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [className])}>
            <Button theme={ThemeButton.OUTLINE} onClick={onToggle} data-testid='sidebar-toggle'>{t('Показать/скрыть панель')}</Button>
            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={styles.lng}/>
            </div>
        </div>
  )
}
