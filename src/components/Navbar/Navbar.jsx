import { useState } from 'react'
import styles from './Navbar.module.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <div>
      <section className={styles.navbar__menu}>
        <div className={styles.navbar__logo}>
          <img className={styles.logo} src="logonuevo.webp" alt="" />
        </div>
        <button className={styles.hamburger} onClick={toggleMenu}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>
        <nav
          className={`${styles.navbar__nav}, ${isOpen ? styles.active : ''}`}
        >
          <ul>
            <li>
              <a>Inicio</a>
            </li>
            <li>
              <a>Nosotros</a>
            </li>
            <li>
              <a>Servicios</a>
            </li>
            <li>
              <a>Contáctenos</a>
            </li>
            <li>
              <a>Portafolio</a>
            </li>
          </ul>
        </nav>
      </section>
    </div>
  )
}

export default Navbar
