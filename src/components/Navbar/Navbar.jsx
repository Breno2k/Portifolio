import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav id="mainNav" className={`${styles.nav} navbar`}>
            <span><a href="#home">Breno</a></span>
            <ul className="nav">
                <li className="nav-item">
                    <a className={`nav-link ${styles.navLink}`} href="#home">Home</a>
                </li>
                <li className="nav-item">
                    <a className={`nav-link ${styles.navLink}`} href="#about">Sobre mim</a>
                </li>
                <li className="nav-item">
                    <a className={`nav-link ${styles.navLink}`} href="#project">Projetos e Competências</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar