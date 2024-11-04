import { styled } from '@mui/system';
import { getLastUrl } from '../utils/functions';

const NotFound = () => {

    const notFoundImage = new URL('../../public/assets/not-found.svg', import.meta.url).href
    const Section = styled('section')({
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        '> h1': {
            color: '#011826',
            textAlign: 'center',
            textTransform: 'uppercase',
            fontWeight: 500,
            marginTop: '52px'
        },
        '> img' : {
            maxWidth: '600px'
        }
    });
  return (
    <Section 
        sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
        }}
    >
        <h1>A página <strong><i>{getLastUrl(location.href)}</i></strong> não existe.</h1>
      <img  src={notFoundImage} alt="Pagina não encontrada" />
    </Section>
  )
}

export default NotFound
