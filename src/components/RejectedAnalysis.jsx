// Components
import { Button } from '@mui/material'

// Redux
import { useDispatch } from 'react-redux'
import { resetStore } from '../redux/reducer/ProfileSlice'

// Styles
import styles from './styles/rejectedAnalysis.module.scss'

// Translation
import { useTranslation } from 'react-i18next'


const RejectedAnalysis = () => {
  const failureAnalysisImage = new URL('../../public/assets/failure-analysis-image.png', import.meta.url).href

  const dispatch = useDispatch()
  const { t } = useTranslation()
  return (
    <div className={styles.container}>
        <h1>{t('concludedAnalysis')}</h1>
        <h2>{t('rejectedAnalysisText')}</h2>
        <img src={failureAnalysisImage} width={300} />
        <Button onClick={() => dispatch(resetStore())}>{t('repeatButton')}</Button>
      </div>
  )
}

export default RejectedAnalysis
