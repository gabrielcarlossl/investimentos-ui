// Components
import { useTranslation } from 'react-i18next'
import ProfileFormSearch from './ProfileFormSearch'
import { EndSectionVerticalLine } from './VerticalLines'

// Styles
import styles from './styles/profileAnalysis.module.scss'

const ProfileAnalysis = () => {
  const profileAnalysisImage = new URL('../../public/assets/profile-image.svg', import.meta.url).href
  const { t } = useTranslation()
  return (
    <div
      data-aos="fade-right"
      data-aos-duration="1200"
      className={styles.container}
    >
      <ProfileFormSearch />
      <img src={profileAnalysisImage} alt={t('profileAnalysisImageAlt')} />
      <EndSectionVerticalLine />
    </div>
  )
}

export default ProfileAnalysis
