import styles from './Projects.module.css'

import { BsBoxArrowUpRight } from "react-icons/bs";


const CardsProjects = ({ title, description, img, }) => {
    return (
        <div className={`${styles.card_projects} card text-white`}>
            <img src={img} alt="imagem do projeto" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className={`${styles.limite} card-text`}>{description}</p>
                <div className={styles.details}>
                    <a href="#">Live Demo <BsBoxArrowUpRight /></a>
                    <button><a href="#"> Details</a></button>
                </div>
            </div>
        </div>
    )
}

export default CardsProjects