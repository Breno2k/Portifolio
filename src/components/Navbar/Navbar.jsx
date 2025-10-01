import styles from './Navbar.module.css'

import { useState } from 'react';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };


    return (
        <nav className={styles.navbar}>
            <a href="#home" className={styles.navbarBrand}>Breno</a>

            <button
                className={`${styles.menuToggle} ${isOpen ? styles.active : ''}`}
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                <div className={styles.hamburger}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </button>

            <ul className={`${styles.navMenu} ${isOpen ? styles.active : ''}`}>
                <li>
                    <a
                        className={styles.navLink}
                        href="#home"
                        onClick={() => setIsOpen(false)}
                    >
                        Home
                    </a>
                </li>
                <li>
                    <a
                        className={styles.navLink}
                        href="#about"
                        onClick={() => setIsOpen(false)}
                    >
                        Sobre mim
                    </a>
                </li>
                <li>
                    <a
                        className={styles.navLink}
                        href="#project"
                        onClick={() => setIsOpen(false)}
                    >
                        Projetos e Competências
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar