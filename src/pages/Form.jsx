import { Box, Input } from '@mui/material';
import { styled } from '@mui/system';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

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
  flexDirection: 'column',
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
const FieldRequired = styled('span')({
  fontSize: '12px',
  color: '#ff8d8d'
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
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    navigate('/success');
  };

  return (
    <Section>
      <h1>{t('urlJoinUs')}</h1>
      <h2>{t('formDescription')}</h2>
      <FormContainer>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <InputLabel>{t('formName')}:
              <Input
                type="text"
                {...register('nomeCompleto', { required: true })}
                placeholder={t('formNamePlaceholder')}
              />
            </InputLabel>
            {errors.nomeCompleto && <FieldRequired>{t('fieldRequired')}</FieldRequired>}
          </InputContainer>
          <InputContainer>
            <InputLabel>{t('formPhone')}:
              <Input
                type="text"
                {...register('telefone', {
                  required: true,
                  maxLength: 11,
                })}
                placeholder={t('formPhonePlaceholder')}
                inputProps={{ maxLength: 11 }}
              />
            </InputLabel>
            {errors.telefone && <FieldRequired>{t('fieldRequired')}</FieldRequired>}
          </InputContainer>
          <InputContainer>
            <InputLabel>Email:
              <Input
                type="text"
                {...register('email', { required: true })}
                placeholder={t('formEmailPlaceholder')}
              />
            </InputLabel>
            {errors.email && <FieldRequired>{t('fieldRequired')}</FieldRequired>}
          </InputContainer>
          <InputContainerFile>
            <InputLabelFile htmlFor="file">
              {t('btnSendDoc')}:
            </InputLabelFile>
            <Input
              className="file"
              type="file"
              id="file"
              {...register('file')}
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

export default Formulario;
