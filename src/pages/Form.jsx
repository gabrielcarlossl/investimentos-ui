import { Box, Input } from '@mui/material';
import { styled } from '@mui/system';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const Section = styled('section')({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  '> h1': {
    color: '#011826',
    margin: '70px 24px 16px',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 600,
    '@media (max-width: 899px)': {
      margin: '34px 16px 0px 16px',
      fontSize: '18px'
    },
  },
  '> h2': {
    fontWeight: 500,
    marginBottom: '82px',
    textAlign: 'center',
    padding: 0,
    '@media (max-width: 899px)': {
      marginBottom: '0px',
      padding: '20px',
      fontSize: '18px'
    },
  },
  backgroundImage: 'linear-gradient(180deg, #fff 0, #0111263b 70%)',
});

const InputLabel = styled('label')({
  fontSize: '14px',
  fontWeight: 600,
  color: '#011826',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  width: '100%',
  '@media (max-width: 899px)': {
    wordBreak: 'nobreak',
    whiteSpace: 'nowrap'
  },
});
const InputLabelFile = styled('label')({
  fontSize: '14px',
  fontWeight: 600,
  color: '#011826',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  '@media (max-width: 899px)': {
    wordBreak: 'nobreak',
    whiteSpace: 'nowrap'
  },
});
const InputContainer = styled('div')({
  padding: '18px 12px 0px',
  display: 'flex',
  'input': {
    color: '#011826',
    fontWeight: 500,
    fontSize: '14px'
  }
});
const InputContainerFile = styled('div')({
  padding: '18px 12px',
  display: 'flex',
  gap: '8px',
  'input': {
    height: 'fit-content !important',
  },
  'input[type=file]::file-selector-button': {
    border: 'none',
    borderRadius: '8px',
    padding: '10px 18px',
    backgroundColor: '#45718c',
    color: '#fff',
    fontWeight: 600,
    fontSize: '14px'
  },
  'input[type=file]::file-selector-button:hover': {
    backgroundColor: '#022340b2',
    cursor: 'pointer'
  }
});
const FormContainer = styled('section')({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '70px'
});
const Form = styled('form')({
  background: '#fff',
  borderRadius: '16px',
  padding: '20px',
});
const SendButton = styled('button')({
  marginTop: '18px',
  padding: '10px 18px',
  borderRadius: '8px',
  border: 'none',
  background: '#022340',
  color: '#fff',
  fontWeight: 600,
  fontSize: '14px',
  '&:hover': {
    background: '#45718c',
    cursor: 'pointer'
  }
});


const Formulario = () => {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    empresaNome: '',
    cpf: '',
    nomeCompleto: '',
    telefone: '',
    email: '',
  });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const submitHandler = () => {
    navigate('/success');
  };

  const { t } = useTranslation()

  return (
    <Section>
      <h1>{t('urlJoinUs')}</h1>
      <h2>{t('formDescription')}</h2>
      <FormContainer>
        <Form
          id="formContact"
          name="contact"
          encType="multipart/form-data"
          onSubmit={submitHandler}
        >
          <InputContainer>
            <InputLabel>{t('formName')}:
              <Input
                type="text"
                name="nomeCompleto"
                value={formValues.nomeCompleto}
                onChange={handleInputChange}
                placeholder={t('formNamePlaceholder')}
                required
              />
            </InputLabel>
          </InputContainer>
          <InputContainer>
            <InputLabel>{t('formPhone')}:
              <Input
                type="text"
                name="telefone"
                value={formValues.telefone}
                onChange={handleInputChange}
                maxLength={11}
                placeholder={t('formPhonePlaceholder')}
                required
              />
            </InputLabel>
          </InputContainer>
          <InputContainer>
            <InputLabel>Email:
              <Input
                type="text"
                name="email"
                value={formValues.email}
                onChange={handleInputChange}
                placeholder={t('formEmailPlaceholder')}
                required
              />
            </InputLabel>
          </InputContainer>


          <InputContainerFile>
            <InputLabelFile htmlFor="file">
              {t('btnSendDoc')}:
            </InputLabelFile>
            <Input
              className="file"
              type="file"
              id="file"
              name="file"
            />
          </InputContainerFile>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'end',
              width: '100%',
            }}
          >
            <SendButton type="submit">{t('btnSend')}</SendButton>
          </Box>
        </Form>
      </FormContainer>
    </Section>
  );
};

export default Formulario

