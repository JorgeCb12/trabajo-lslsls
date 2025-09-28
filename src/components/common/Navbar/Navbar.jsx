import styles from './Navbar.module.css'
import { MdMenu } from 'react-icons/md'
import { useState } from 'react'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <header className={styles.navbar__menu}>
      <div className={styles.navbar__logo}>
        <img className={styles.logo} src="logonuevo.webp" alt="" />
      </div>
      <MdMenu size={32} color="#fff" onClick={toggleMenu} />

      <nav
        className={`${styles.navbar__nav} ${
          showMenu ? styles.navbar__nav__active : ''
        }`}
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
    </header>
  )
}

export default Navbar
