import { useTranslation } from 'react-i18next'
import { Counter } from '../../../entities/Counter'

const Main = () => {
  const { t } = useTranslation('main')
  return (
        <div>
            {t('Главная страница')}
            <Counter />
        </div>
  )
}

export default Main
