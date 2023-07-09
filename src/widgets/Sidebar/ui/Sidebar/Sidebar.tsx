import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Sidebar.module.scss'
import { useState } from 'react'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { useTranslation } from 'react-i18next'

interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false)
  const { t } = useTranslation()
  const onToggle = () => { setCollapsed((collapsed) => !collapsed) }

  return (
        <div className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [className])}>
            <button onClick={onToggle}>{t('Показать/скрыть панель')}</button>
            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={styles.lng}/>
            </div>
        </div>
  )
}
