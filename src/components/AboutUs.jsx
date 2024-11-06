
// Components
import { EndSectionVerticalLine, StartSectionVerticalLine } from './VerticalLines'
import { Box } from '@mui/material';

// Styles
import styles from './styles/aboutUs.module.scss'

// Translation
import { useTranslation } from 'react-i18next';

const AboutUs = () => {
    const { t } = useTranslation()

    return (
        <section className={styles.container} id='sobre-nos'>
            <StartSectionVerticalLine />
            <h1
                data-aos="fade-down"
                data-aos-duration="900"
            >
                {t('urlAboutUs')}
            </h1>
            <Box className={styles.text_container}>
                <h2
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    className={styles.subtitle}
                    dangerouslySetInnerHTML={{ __html: t('aboutUsSubTitle') }}
                />
                <p
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    className={styles.text}
                    dangerouslySetInnerHTML={{ __html: t('aboutUsText') }}
                />
            </Box>
            <EndSectionVerticalLine />
        </section>
    )
}

export default AboutUs
