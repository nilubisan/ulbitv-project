import { useTheme } from 'app/providers/ThemeProvider'
import 'app/styles/index.scss'

interface TProps {
  children: JSX.Element
}

const StorybookWrapper = ({ children }: TProps) => {
  const { theme } = useTheme()

  return (
        <div className={theme}>
            { children }
        </div>
  )
}

export default StorybookWrapper
