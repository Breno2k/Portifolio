import styles from './Projects.module.css'

const NavProject = ({ icon, title, active }) => {
    return (
        <div className={`${styles.container} ${active ? styles.active : ""}`}>
            <div className={styles.card}>
                <p>{icon}</p>
                <h5>{title}</h5>
            </div>
        </div>
    )
}

export default NavProject