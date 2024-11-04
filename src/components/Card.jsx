import { Box } from '@mui/material'
import { styled } from '@mui/system'
import PropTypes from 'prop-types'


const Card = ({ bgColor, title, subTitle, text, imageDescription, imgUrl }) => {
  const Container = styled('div')({
    overflow: 'clip',
    background: bgColor,
    justifyContent: 'space-between',
    borderRadius: '8px',
    maxWidth: '300px',
    minHeight: '100px',
    height: '100%',
    padding: '20px',
    width: '100%',
    '> h1': {
      color: '#011826'
    },
    '> h2': {
      color: '#011826'
    },
    '> p': {
      color: '#011826',
      margin: '0px',
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: ' 0.00938em'
    },
    ' div > img': {
      maxWidth: '200px'
    }

  })

  return (
    <Container>
      <Box>
        <h1>{title}</h1>
        <h2>{subTitle}</h2>
        <p dangerouslySetInnerHTML={{ __html: text }} />
      </Box>
      <Box display='flex' width='100%' justifyContent='center'>
        <img src={imgUrl} alt={imageDescription} />
      </Box>
    </Container>
  )
}

Card.propTypes = {
  bgColor: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  imageDescription: PropTypes.string,
  imgUrl: PropTypes.node
}

export default Card
