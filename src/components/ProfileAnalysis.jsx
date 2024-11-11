// Components
import { useTranslation } from 'react-i18next'
import ProfileCard from './ProfileCard'
import { EndSectionVerticalLine } from './VerticalLines'

// Styles
import styles from './styles/profileAnalysis.module.scss'

const ProfileAnalysis = () => {
  const profileAnalysisImage = new URL('../../public/assets/profile-image.svg', import.meta.url).href
const {t} = useTranslation()
  return (
    <div className={styles.container}>
      <ProfileCard />
      <img src={profileAnalysisImage} alt={t('profileAnalysisImageAlt')} />
      <EndSectionVerticalLine />
    </div>
  )
}

export default ProfileAnalysis
