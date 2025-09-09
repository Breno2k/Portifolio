import styles from './Projects.module.css'

const Cards = ({ icon, title }) => {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <p>{icon}</p>
                <h5>{title}</h5>
            </div>
        </div>
    )
}

export default Cards