import styles from './Projects.module.css'

const TechStack = ({ img, name }) => {
    return (

        <div className={styles.card_svg}>
            <img className={styles.svg_image} src={img} alt="Tech Stack image" />
            <h4>{name}</h4>
        </div>

    )
}

export default TechStack