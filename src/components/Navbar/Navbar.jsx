import styles from './Navbar.module.css'
import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <span>Breno</span>
            <ul>
                <li><NavLink
                    className={({ isActive }) =>
                        isActive ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink
                    }
                    to="/">Home</NavLink></li>
                <li><NavLink
                    className={({ isActive }) =>
                        isActive ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink
                    }
                    to="/about">Sobre mim</NavLink></li>
                <li><NavLink
                    className={({ isActive }) =>
                        isActive ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink
                    }
                    to="/projects">Projetos e Competências</NavLink></li>
                <li><NavLink
                    className={({ isActive }) =>
                        isActive ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink
                    }
                    to="/contact">Contato</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar