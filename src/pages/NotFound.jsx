import { getLastUrl } from '../utils/functions'
import styles from './styles/notFound.module.scss'

const NotFound = () => {

  const notFoundImage = new URL('../../public/assets/not-found.svg', import.meta.url).href

  return (
    <section
      className={styles.container}
    >
      <h1>A página&nbsp; 
        <span className={styles.url}>
          <span className={styles.italic}>{getLastUrl(location.href)}</span>
        </span> não existe.
      </h1>
      <img src={notFoundImage} alt="Pagina não encontrada" />
    </section>
  )
}

export default NotFound
