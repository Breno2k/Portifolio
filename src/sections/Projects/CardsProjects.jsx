import styles from './Projects.module.css'

// icons
import { GoArrowRight } from "react-icons/go";
import { BsBoxArrowUpRight } from "react-icons/bs";


const CardsProjects = ({ title, description, img, }) => {
    return (
        <div className={`${styles.card_projects} card text-white`}>
            <div className={styles.img_wrapper}>
                <img className={styles.card_img} src={img} alt="imagem do projeto" />
            </div>

            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className={`${styles.limite} card-text`}>{description}</p>
                <div className={styles.details}>
                    <a href="#">Live Demo <BsBoxArrowUpRight /></a>
                    <button>Details <GoArrowRight /></button>
                </div>
            </div>
        </div>
    )
}

export default CardsProjects