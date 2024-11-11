// Components
import { Avatar, Box } from '@mui/material'
import { EndSectionVerticalLine } from './VerticalLines'
import Form from './Form'

// Styles
import styles from './styles/successAnalysis.module.scss'

// Redux
import { useSelector } from 'react-redux'

// Translation
import { useTranslation } from 'react-i18next'

const SuccessAnalysis = () => {

  const { item } = useSelector((state) => state.ProfileReducer)
  const { t } = useTranslation()

  return (
    <div className={styles.container}>
      <Box className={styles.success_analysis_container}>
        <div className={styles.data_wrapper}>
          <div
            data-aos="fade-down"
            data-aos-duration="900"
            className={styles.concludedAnalysis_container}
          >
            <h1>{t('concludedAnalysis')}</h1>
            <h2>{t('successAnalysisSubTitle')}</h2>
          </div>
          <div
            data-aos="fade-right"
            data-aos-duration="1200"
            className={styles.profileData_container}
          >
            <div className={styles.avatar_container}>
              <Avatar src={item.avatar_url} sx={{ height: '100px', width: '100px' }} alt={t('profileAvatarAlt') + item?.name} />
            </div>
            <div className={styles.single_data_container}>
              <label>{t('successAnalysisData_name')}:</label>
              <p>{item?.name}</p>
            </div>
            <div className={styles.single_data_container_row}>
              <label>{t('successAnalysisData_followers')}:</label>
              <p>{item?.followers}</p>
              <label>{t('successAnalysisData_following')}:</label>
              <p>{item?.following}</p>
            </div>
            <div className={styles.single_data_container}>
              <label>{t('successAnalysisData_company')}:</label>
              <p>{item?.company ?? '-'}</p>
            </div>
            <div className={styles.single_data_container}>
              <label>{t('successAnalysisData_location')}:</label>
              <p>{item?.location ?? '-'}</p>
            </div>
            <div className={styles.single_data_container_row}>
              <label>{t('successAnalysisData_public_repositories')}:</label>
              <p>{item?.public_repos}</p>
            </div>
          </div>
        </div>
        <Form />
      </Box>
      <EndSectionVerticalLine />
    </div>
  )
}

export default SuccessAnalysis
