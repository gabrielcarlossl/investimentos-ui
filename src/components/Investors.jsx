
// Components
import { Box, Typography } from '@mui/material';
import { EndSectionVerticalLine } from './VerticalLines'

// Styles
import { useMediaQuery } from 'react-responsive'
import styles from './styles/findInvestors.module.scss'

// Translation
import { useTranslation } from 'react-i18next';

const Investors = () => {

    const isBigScreen = useMediaQuery({ query: '(min-width: 900px)' })
    const investmentImage = new URL('../../public/assets/investment-consulting.png', import.meta.url).href
    const { t } = useTranslation()

    return (
        <section
            className={styles.section}
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-anchor-placement="top-center"
            id='encontre-investidores'>

            <h1>{t('findInvTitleP1')} <br />
                <strong>{t('findInvTitleP2')}</strong>
            </h1>
            <h2>{t('findInvTitleP3')}</h2>

            <Box
                sx={{
                    alignItems: 'center',
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: isBigScreen ? '100px' : '0px',
                    justifyContent: 'center',
                }}
            >
                <img
                    className={styles.investment_image}
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    src={investmentImage}
                />
                <Typography
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    className={styles.invest_text}
                    sx={{
                        background: '#fff',
                        borderRadius: '16px',
                        fontSize: isBigScreen ? '18px' : '16px',
                        maxWidth: isBigScreen ? '400px' : '320px',
                        marginBottom: isBigScreen ? 0 : '24px',
                        padding: '30px',
                        fontFamily: 'Montserrat',
                        fontWeight: 500
                    }}
                >
                    {t('findInvText')}
                </Typography>
            </Box>
            <EndSectionVerticalLine />
        </section>
    )
}

export default Investors
