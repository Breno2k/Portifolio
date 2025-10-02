// styles
import styles from './Projects.module.css'

// hooks
import useAOS from '../../hooks/useAOS';

// icons
import { GoArrowRight } from "react-icons/go";
import { FaExternalLinkAlt } from "react-icons/fa";

// react router
import { useNavigate } from 'react-router-dom';

const CardsProjects = ({ title, deploy, description, img, tech, github, caracteristicas }) => {

    useAOS();

    const navigate = useNavigate()

    return (
        <div data-aos="fade-up" data-aos-duration="1400" className={`${styles.card_projects} card text-white`}>
            <div className={styles.img_wrapper}>
                <img className={styles.card_img} src={img} alt="imagem do projeto" />
            </div>

            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className={`${styles.limite} card-text`}>{description}</p>
                <div className={styles.details}>
                    <a href={deploy}>Live Demo <FaExternalLinkAlt /></a>
                    <button onClick={() => navigate("/details",
                        { state: { title, deploy, description, img, tech, github, caracteristicas } })
                    }>Details <GoArrowRight />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CardsProjects