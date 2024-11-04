import { useMediaQuery } from 'react-responsive';
import { EndSectionVerticalLine, StartSectionVerticalLine } from './VerticalLines'

import { styled } from '@mui/system';
import Card from './Card';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

const HowItWorks = () => {
    const isBigScreen = useMediaQuery({ query: '(min-width: 900px)' })

    const formImage = new URL('../../public/assets/form-illustration.png', import.meta.url).href
    const profileImage = new URL('../../public/assets/profile-image.svg', import.meta.url).href
    const mentorImage = new URL('../../public/assets/mentor-image.png', import.meta.url).href

    const Section = styled('section')({
        overflow: 'clip',
        scrollMarginTop: isBigScreen ? '-100px' : '-500px',
        alignItems: 'center',
        backgroundImage: 'linear-gradient(180deg, #fff 0, #0111263b 70%)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        '> h1': {
            color: '#011826',
            fontWeight: 600,
            margin: isBigScreen ? '70px 16px 30px 16px' : '34px 16px 0px 16px',
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
        }
    });

    const { t } = useTranslation()

    const cardData = [
        {
            title: t('stepOne'),
            subTitle: t('urlJoinUs'),
            text: t('stepOneText'),
            bgColor: '#20629c90',
            aos: 'fade-up',
            duration: '900',
            imgUrl: formImage,
            imageDescription: t('howItWorksImageAlt')
            
        },
        {
            title: t('stepTwo'),
            subTitle: t('stepTwoSubTitle'),
            text: t('stepTwoText'),
            bgColor: '#39627368',
            aos: 'fade-down',
            duration: '1100',
            imgUrl:  profileImage,
            imageDescription: t('howItWorksImageAltTwo')
            
        },
        {
            title: t('stepThree'),
            subTitle: t('stepThreeSubTitle'),
            text: t('stepThreeText'),
            bgColor: '#02234044',
            aos: 'fade-up',
            duration: '1300',
            imgUrl:  mentorImage,
            imageDescription: t('howItWorksImageAltThree')
        }
    ]
    return (
        <Section id='como-funciona'>
            <StartSectionVerticalLine />
            <h1
                data-aos="fade-down"
                data-aos-duration="900"
            >
                {t('urlHowItWorks')}?
            </h1>
            <h2
                data-aos="fade-down"
                data-aos-duration="1100"
            >
                {t('howItWorksSubTitle')}
            </h2>
            <h3
                data-aos="fade-down"
                data-aos-duration="1300"
            >

            </h3>

            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: isBigScreen ? '16px' : '72px',
                    justifyContent: isBigScreen ? '' : 'center',
                    marginBottom: '120px'
                }}
            >
                {
                    cardData?.map((info, index) => <div data-aos={info.aos} data-aos-duration={info.duration} key={index}>
                        <Card
                            title={info.title}
                            subTitle={info.subTitle}
                            text={info.text}
                            bgColor={info.bgColor}
                            imgUrl={info.imgUrl} 
                            imageDescription={info.imageDescription}
                            />
                    </div>)
                }
            </Box>
            <EndSectionVerticalLine />
        </Section>
    )
}

export default HowItWorks
