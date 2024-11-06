// Components
import { StartSectionVerticalLineLight } from './VerticalLines'
import {
    Button,
    Box,
    Typography
} from '@mui/material'

// Styles
import styles from './styles/footer.module.scss'

// Utils
import { useTranslation } from 'react-i18next'

const Footer = () => {
    const currentDate = new Date()
    const currentYear = currentDate.getFullYear()
    const { t } = useTranslation()

    return (
        <section className={styles.container}>
            <StartSectionVerticalLineLight />
            <Box
                className={styles.button_container}
                data-aos="fade-down"
                data-aos-duration="900"
            >
                <h1>{t('joinUs')}</h1>
                <Button
                    className={styles.start_now_navigator}
                    href='/formulario'
                >
                    {t('startNow')}
                </Button>
            </Box>
            <Box
                data-aos="fade-up"
                data-aos-duration="900"
            >
                <Typography className={styles.copyright}>
                    {t('copyright', { currentYear })}
                </Typography>
            </Box>
        </section>
    )
}

export default Footer
