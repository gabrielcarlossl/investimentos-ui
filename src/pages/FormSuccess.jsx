// Components
import { EndSectionVerticalLine } from '../components/VerticalLines'

// Styles
import styles from './styles/formSuccess.module.scss'

// Utils
import { useTranslation } from 'react-i18next'

const FormSuccess = () => {

    const successImage = new URL('../../public/assets/email-sent-success.svg', import.meta.url).href
    const { t } = useTranslation()

    return (
        <section className={styles.container}>
            <div className={styles.title_wrapper}>
                <h1>
                    {t('formSentMessage')}
                </h1>
                <h2>
                    {t('formSentSubTitle')}
                </h2>
                <h3>
                    {t('formSentText')}
                </h3>
                <img
                    src={successImage}
                    alt={t('formImageAlt')}
                />
            </div>
            <EndSectionVerticalLine />
        </section>
    )
}

export default FormSuccess
