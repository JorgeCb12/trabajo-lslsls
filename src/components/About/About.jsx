import styles from './About.module.css'

const About = () => {
  return (
    <section className={styles.about}>
      <h2 className={styles.about__title}>Nosotros</h2>
      <p className={styles.about__subtitle}>Contenido de la sección About</p>
    </section>
  )
}

export default About
