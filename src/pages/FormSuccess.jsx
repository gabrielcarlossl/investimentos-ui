import { useMediaQuery } from 'react-responsive'
import { styled } from '@mui/system'
import { Box } from '@mui/material'
import { EndSectionVerticalLine } from '../components/VerticalLines'
import { useTranslation } from 'react-i18next'

const FormSuccess = () => {

    const isBigScreen = useMediaQuery({ query: '(min-width: 900px)' })
    const successImage = new URL('../../public/assets/email-sent-success.svg', import.meta.url).href
    const { t } = useTranslation()

    const Section = styled('section')({
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        'div > h1': {
            color: '#011826',
            margin: isBigScreen ? '70px 16px 0px 16px' : '34px 8px 8px',
            textAlign: 'center',
            textTransform: 'uppercase',
            fontWeight: 500,
            fontSize: '20px'

        },
        'div > h3': {
            textAlign: 'center'
        },
        backgroundImage: 'linear-gradient(180deg, #fff 0, #0111263b 70%)',
        '& > div:first-of-type': {
            display: 'flex',
            flexDirection: 'column'
        }
    })
    const Image = styled('img')({
        maxWidth: '600px',
        width: '100%'
    })
    const H2 = styled('h2')({
        fontWeight: 500,
        margin: isBigScreen ? '50px 0px' : '15px 0px',
        paddingInline: isBigScreen ? '' : '22px',
        textAlign: isBigScreen ? '' : 'center'
    });

    return (
        <Section>
            <Box alignItems={'center'}>
                <h1>
                    {t('formSentMessage')}
                </h1>
                <H2>
                    {t('formSentSubTitle')}
                </H2>
                <h3>
                    {t('formSentText')}
                </h3>
                <Image
                    sx={{ width: '300px' }}
                    src={successImage}
                    alt={t('formImageAlt')}
                />
            </Box>
            <EndSectionVerticalLine />
        </Section>
    )
}

export default FormSuccess
