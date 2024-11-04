
// Components
import { EndSectionVerticalLine, StartSectionVerticalLine } from './VerticalLines'
import { Box, Typography } from '@mui/material';

// Styles
import { styled } from '@mui/system';
import { useMediaQuery } from 'react-responsive';

// Translation
import { useTranslation } from 'react-i18next';

const AboutUs = () => {
    const isBigScreen = useMediaQuery({ query: '(min-width: 900px)' })
    const Section = styled('section')({
        overflow: 'clip',
        alignItems: 'center',
        backgroundImage: 'linear-gradient(180deg, #fff 0, #0111263b 70%)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        '> h1': {
            color: '#011826',
            fontWeight: 600,
            margin: isBigScreen ? '70px 16px 90px 16px' : '34px 16px 0px 16px',
            textAlign: 'center',
            textTransform: 'uppercase',

        },
        '> h2': {
            fontWeight: 500,
            marginBottom: isBigScreen ? '50px' : '0px',
            textAlign: isBigScreen ? '' : 'center',
            padding: isBigScreen ? 0 : '20px',
            fontSize: '20px'
        },
        '> h3': {
            color: '#011826',
            fontWeight: 500,
            marginBottom: isBigScreen ? '82px' : '32px',
            textAlign: isBigScreen ? '' : 'center',
            padding: isBigScreen ? 0 : '20px',
        },
        'img': {
            borderRadius: '16px'
        }
    })

    const { t } = useTranslation()

    return (
        <Section id='sobre-nos'>
            <StartSectionVerticalLine />
            <h1
                data-aos="fade-down"
                data-aos-duration="900"
            >
                {t('urlAboutUs')}
            </h1>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: !isBigScreen ? 'column' : 'row',
                    marginBottom: '82px',
                    gap: '32px'
                }}
            >
                <Typography
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    sx={{
                        display: 'flex',
                        width: '100%',
                        maxWidth: isBigScreen ? '450px' : '100%',
                        textAlign: !isBigScreen && 'center',
                        fontSize: isBigScreen ? '40px' : '24px',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        marginTop: !isBigScreen && '42px'
                    }}

                    dangerouslySetInnerHTML={{ __html: t('aboutUsSubTitle') }}
                />
                <Typography
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    sx={{
                        width: isBigScreen ? '100%' : 'fit-content',
                        maxWidth: isBigScreen ? '700px' : '100%',
                        fontSize: '20px',
                        marginTop: '32px',
                        paddingInline: '22px',
                        fontFamily: 'Montserrat'
                    }}
                    dangerouslySetInnerHTML={{ __html: t('aboutUsText') }}
                />
            </Box>
            <EndSectionVerticalLine />
        </Section>
    )
}

export default AboutUs
