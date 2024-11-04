import { styled } from '@mui/system'
import { useMediaQuery } from 'react-responsive'
import { StartSectionVerticalLineLight } from './VerticalLines'
import { Box, Button, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

const Footer = () => {
    const isBigScreen = useMediaQuery({ query: '(min-width: 900px)' })

    const Section = styled('section')({
        overflow: 'clip',
        alignItems: 'center',
        // background: '#45718c9d',
        backgroundImage: 'linear-gradient(180deg, #45718c9d 0, #0111264b 70%)',
        display: 'flex',
        flexDirection: 'column',
        '> div > h1': {
            textAlign: 'center',
            fontWeight: 500,
            textTransform: 'uppercase',

        }
    })

    const StartNowNavigator = styled(Button)({
        color: ' #fff',
        background: '#011826',
        borderRadius: '32px',
        fontsize: '16px',
        fontWeight: 700,
        '&:hover': {
            color: '#fff',
            background: '#45788C'
        },
        padding: '10px 24px'
    });

    const currentDate = new Date()
    const currentYear = currentDate.getFullYear()

    const { t } = useTranslation()

    return (
        <Section>
            <StartSectionVerticalLineLight />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginY: '42px',

                }}
            >
                <h1>{t('joinUs')}</h1>
                <StartNowNavigator href='/formulario' >{t('startNow')}</StartNowNavigator>
            </Box>
            <Box>
                <Typography
                    sx={{
                        fontSize: '12px',
                        marginY: '32px',
                        padding: isBigScreen ? 0 : '20px',
                        textAlign: 'center'
                    }}
                >
                    {t('copyright', {
                        currentYear
                    })}
                </Typography>
            </Box>
        </Section>
    )
}

export default Footer
