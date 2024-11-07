// Components
import { EndSectionVerticalLine } from './VerticalLines'

// Styles
import styles from './styles/findInvestors.module.scss'

// Translation
import { useTranslation } from 'react-i18next';

const Investors = () => {

    const investmentImage = new URL('../../public/assets/investment-consulting.png', import.meta.url).href

    const { t } = useTranslation()

    return (
        <section
            className={styles.section}
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-anchor-placement="top-center"
            id='encontre-investidores'>

            <h1>
                {t('findInvTitleP1')}
                <br />
                <strong>{t('findInvTitleP2')}</strong>
            </h1>
            <h2>{t('findInvTitleP3')}</h2>

            <div className={styles.image_text_container}>
                <img
                    className={styles.investment_image}
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    src={investmentImage}
                />
                <p
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    className={styles.invest_text}
                >
                    {t('findInvText')}
                </p>
            </div>
            <EndSectionVerticalLine />
        </section>
    )
}

export default Investors
