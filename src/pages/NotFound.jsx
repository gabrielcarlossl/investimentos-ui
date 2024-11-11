// Styles
import styles from './styles/notFound.module.scss'

// Utils
import { useTranslation } from 'react-i18next'
import { getLastUrl } from '../utils/functions'


const NotFound = () => {

  const notFoundImage = new URL('../../public/assets/not-found.svg', import.meta.url).href
  const { t } = useTranslation()

  return (
    <section
      className={styles.container}
    >
      <h1>{t('notFoundPage_start')}&nbsp; 
        <span className={styles.url}>
          <span className={styles.italic}>{getLastUrl(location.href)}</span>
        </span> {t('notFoundPage_end')}
      </h1>
      <img src={notFoundImage} alt={t('notfoundImageAlt')} />
    </section>
  )
}

export default NotFound
