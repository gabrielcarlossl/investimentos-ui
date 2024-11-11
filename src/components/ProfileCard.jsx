// Components
import { Box, Button, Input } from '@mui/material'

// Redux
import { useDispatch } from 'react-redux'
import { getSingleProfileService } from '../redux/services/ProfileServices'

// Styles
import styles from './styles/profileCard.module.scss'
import { useTranslation } from 'react-i18next'

// React Hook Form
import { useForm } from 'react-hook-form'

const ProfileCard = () => {

  const dispatch = useDispatch()
  const { t } = useTranslation()

  // Configuração do React Hook Form
  const { register, handleSubmit, formState: { errors } } = useForm()

  // A função 'onSubmit' vai receber os dados do formulário, e enviará o username para a API
  const onSubmit = (data) => {
    // Disparo a ação de requisição passando como parâmetro para a requisição login do github
    dispatch(getSingleProfileService({ profile: data.username }))
  }

  return (
    <div className={styles.container}>
      <h1>{t('analyzeYourProfile')}</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box>
          <Input
            type="text"
            {...register('username', { required: t('usernameInputRequired') })}
          />
        </Box>
        <Button type="submit">{t('analyzeStartBtn')}</Button>
      </form>
      {errors.username && <p>{errors.username.message}</p>}
    </div>
  )
}

export default ProfileCard
