import { useTranslation } from 'react-i18next'

const About = () => {
  const { t } = useTranslation('about')

  return (
        <div>
            {t('О сайте')}
            {t('О сайте подробней')}
        </div>
  )
}

export default About
