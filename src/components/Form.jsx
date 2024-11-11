// Components
import { Input } from '@mui/material'

// Styles
import styles from './styles/form.module.scss'

// Utils
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

const Form = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    navigate('/success')
  }

  return (
    <section className={styles.container}>
      <h1>{t('urlJoinUs')}</h1>
      <h2>{t('formDescription')}</h2>
      <div className={styles.formContainer}>
        <form
          className={styles.formWrapper}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className={styles.inputContainer}>
            <label className={styles.inputLabel}>{t('formName')}:
              <Input
                type="text"
                {...register('nomeCompleto', { required: true })}
                placeholder={t('formNamePlaceholder')}
              />
            </label>
            {
              errors.nomeCompleto &&
              <span className={styles.fieldRequired}>
                {t('fieldRequired')}
              </span>
            }
          </div>
          <div className={styles.inputContainer}>
            <label className={styles.inputLabel}>{t('formPhone')}:
              <Input
                type="text"
                {...register('telefone', {
                  required: true,
                  maxLength: 11,
                })}
                placeholder={t('formPhonePlaceholder')}
                inputProps={{ maxLength: 11 }}
              />
            </label>
            {
              errors.telefone &&
              <span className={styles.fieldRequired}>
                {t('fieldRequired')}
              </span>
            }
          </div>
          <div className={styles.inputContainer}>
            <label className={styles.inputLabel}>Email:
              <Input
                type="text"
                {...register('email', { required: true })}
                placeholder={t('formEmailPlaceholder')}
              />
            </label>
            {
              errors.email &&
              <span className={styles.fieldRequired}>
                {t('fieldRequired')}
              </span>
            }
          </div>
          <div className={styles.inputContainerFile}>
            <label className={styles.inputLabelFile} htmlFor="file">
              {t('btnSendDoc')}:
            </label>
            <Input
              className="file"
              type="file"
              id="file"
              {...register('file')}
            />
          </div>
          <div className={styles.buttonContainer}>
            <button
              className={styles.sendButton}
              type="submit"
            >
              {t('btnSend')}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Form
