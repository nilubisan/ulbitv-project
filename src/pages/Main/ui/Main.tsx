import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import { Input } from 'shared/ui/Input/Input'

const Main = () => {
  const { t } = useTranslation('main')

  const [value, setValue] = useState('')

  const onChange = (updatedValue: string) => {
    setValue(updatedValue)
  }

  return (
        <div>
            {t('Главная страница')}
        </div>
  )
}

export default Main
