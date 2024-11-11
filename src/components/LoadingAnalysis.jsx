// Components
import { Box, CircularProgress } from '@mui/material'
import { EndSectionVerticalLine } from './VerticalLines'

// Styles
import styles from './styles/loadingAnalysis.module.scss'

// Translation
import { useTranslation } from 'react-i18next'

const LoadingAnalysis = () => {
  const { t } = useTranslation()

  return (
    <Box
      sx={{
        '.MuiCircularProgress-root': {
          color: '#45718C'
        }
      }}
      className={styles.loading_container}
    >
      <div>
        <h1>{t('loadingText')}</h1>
        <CircularProgress />
      </div>
      <EndSectionVerticalLine />
    </Box>
  )
}

export default LoadingAnalysis
