import * as React from 'react';

// Assets
import MenuIcon from '@mui/icons-material/Menu';

// Components
import {
    AppBar,
    Box,
    Button,
    Container,
    FormControl,
    IconButton,
    Menu,
    MenuItem,
    Select,
    Switch,
    Toolbar,
    Tooltip,
    Typography
} from '@mui/material';

// Styles
import { styled } from '@mui/system';
import { useMediaQuery } from 'react-responsive';
import styles from './styles/appBar.module.scss'

// Utils
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const JoinUsButton = styled(Button)({
    color: ' #011826',
    background: '#F2F2EB',
    fontsize: '16px',
    fontWeight: 700,
    '&:hover': {
        color: '#fff',
        background: '#45788C'
    }
});
const Logo = styled('img')({
    maxWidth: '90px',
    width: '100%'
});
const StyledBox = styled(Box)({
    flexGrow: 1,
    justifyContent: 'center',
    gap: '32px',
    alignItems: 'center',
});
const ButtonNavigateResponsive = styled('a')({
    my: 2,
    fontSize: '16px',
    color: '#011826',
    textDecoration: 'none'
});
const ButtonNavigate = styled('a')({
    my: 2,
    fontSize: '16px',
    padding: '8px',
    color: '#fff',
    textDecoration: 'none',
    textTransform: 'uppercase',
    '&:hover': {
        padding: '8px',
        background: '#45718C',
        borderRadius: '8px',
        color: '#011126'
    }
});
const LogoNavigate = styled('a')({
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    '&:visited': {
        color: '#fff',
    }
});



function AppBarMenu() {

    // Assets
    const logo = new URL('../../public/assets/logo.png', import.meta.url).href
    const brasil = new URL('../../public/assets/brasil.svg', import.meta.url).href
    const eua = new URL('../../public/assets/eua.png', import.meta.url).href

    const [anchorElNav, setAnchorElNav] = React.useState(null)
    const navigate = useNavigate()
    const location = useLocation()
    const isMobile = useMediaQuery({ query: '(max-width: 900px)' })

    const { t, i18n: { changeLanguage } } = useTranslation()
    const [currentLanguage, setCurrentLanguage] = React.useState('pt')
    const [checked, setChecked] = React.useState(false)
    const [country, setCountry] = React.useState('Pt-BR')

    const handleChangeLanguage = () => {
        const newLanguage = currentLanguage === 'en' ? 'pt' : 'en'
        changeLanguage(newLanguage)
        setCurrentLanguage(newLanguage)
        if (newLanguage === 'pt') {
            setChecked(false)
            setCountry('Pt-BR')
        } else {
            setChecked(true)
            setCountry('En-US')
        }
    }

    const pages = [
        { page: t('urlInvestorMonitoring'), to: '/#encontre-investidores' },
        { page: t('urlHowItWorks'), to: '/#como-funciona' },
        { page: t('urlAboutUs'), to: '/#sobre-nos' },
        { page: t('urlContact'), to: 'https://api.whatsapp.com/send?phone=5583999410339' },
        isMobile && { page: t('urlJoinUs'), to: '/formulario' }
    ]

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleNavigate = (to) => {
        if (to.startsWith('http')) {
            window.location.href = to;
        } else {
            navigate(to)
        }
        handleCloseNavMenu();
    };

    React.useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);



    return (
        <AppBar
            className={styles.AppBar}
            position="sticky">
            <Container sx={{ height: '100px' }} maxWidth="xl">
                <Toolbar sx={{ height: '100%' }} disableGutters>
                    <Box
                        variant="h6"
                        component="a"
                        className={styles.logo_container}
                    >
                        <LogoNavigate href='/'>
                            <Logo src={logo} />
                        </LogoNavigate>

                    </Box>

                    <Box
                        className={styles.link_container}>
                        <IconButton
                            size="large"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page, index) => (
                                <MenuItem key={index} onClick={() => handleNavigate(page.to)}>
                                    <ButtonNavigateResponsive href={page.to} textAlign="center">{page.page}</ButtonNavigateResponsive>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h5"
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'sans-serif',
                            alignItems: 'center',
                            gap: '8px',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            whiteSpace: 'break-spaces',
                            justifyContent: 'space-between'
                        }}
                    >
                        <LogoNavigate href='/'>
                            <Logo src={logo} /> Invest
                        </LogoNavigate>
                        <Box
                            sx={{
                                '.MuiInputBase-root': {
                                    background: '#fff'
                                },
                                '.MuiSelect-select': {
                                    display: 'flex',
                                    paddingBlock: '9px',
                                    paddingInline: country === 'Pt-BR' ? '10px' : '14px'
                                }
                            }}
                        >
                            <FormControl>
                                <Select
                                    labelId="selectLanguage"
                                    id="selectLanguage"
                                    value={country}
                                    defaultValue={'En-US'}
                                    onChange={handleChangeLanguage}
                                >
                                    <MenuItem value={'En-US'}><img width={20} src={eua} /></MenuItem>
                                    <MenuItem value={'Pt-BR'}><img width={20} height={20} src={brasil} /></MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Typography>
                    <StyledBox sx={{ display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page, index) => {
                            return (
                                <ButtonNavigate
                                    key={index}
                                    onClick={() => handleNavigate(page.to)}
                                    href={page.to}
                                    style={{ display: page.page === 'Apresente sua empresa' ? 'none' : 'block', }}
                                >
                                    {page.page}
                                </ButtonNavigate>
                            )
                        })}
                        <JoinUsButton href='/formulario'>{t('btnJoinUs')}</JoinUsButton>
                        <Tooltip title={currentLanguage === 'en' ? 'Change Language' : 'Mudar idoma'}>
                            <Box
                                sx={{
                                    alignItems: 'center',
                                    display: 'flex',
                                    '& .MuiSwitch-track': {
                                        background: '#009B3A'
                                    },
                                    '& .MuiSwitch-thumb': {
                                        background: currentLanguage === 'pt' ? '#009B3A' : ''
                                    }
                                }}
                            >

                                <img width={30} src={brasil} />
                                <Switch
                                    checked={checked}
                                    onChange={handleChangeLanguage}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                />
                                <img width={30} src={eua} />
                            </Box>
                        </Tooltip>
                    </StyledBox>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default AppBarMenu;