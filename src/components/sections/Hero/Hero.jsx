import styles from './Hero.module.css'
import { MdKeyboardArrowDown } from 'react-icons/md'

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__content}>
        <h1 className={styles.hero__title}>
          Remote PC <br /> Solutions
        </h1>
        <p className={styles.hero__subtitle}>¡Desarrollamos todas tus ideas!</p>
        <button className={styles.hero__button}>
          <MdKeyboardArrowDown size={48} />
        </button>
      </div>
    </section>
  )
}
