// Components
import { EndSectionVerticalLine, StartSectionVerticalLine } from './VerticalLines'
import Card from './Card';
import { Box } from '@mui/material';

// Styles
import styles from './styles/howItWorks.module.scss'

// Utils
import { useTranslation } from 'react-i18next';

const HowItWorks = () => {

    const formImage = new URL('../../public/assets/form-illustration.png', import.meta.url).href
    const profileImage = new URL('../../public/assets/profile-image.svg', import.meta.url).href
    const mentorImage = new URL('../../public/assets/mentor-image.png', import.meta.url).href

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
        <section className={styles.container} id='como-funciona'>
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
            <Box className={styles.card_container}>
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
        </section>
    )
}

export default HowItWorks
