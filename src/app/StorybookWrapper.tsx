import { useTheme } from 'app/providers/ThemeProvider'
import 'app/styles/index.scss'

const StorybookWrapper = ({ children }) => {
  const { theme } = useTheme()

  return (
        <div className={theme}>
            { children }
        </div>
  )
}

export default StorybookWrapper
