import { useLocation, useNavigate } from 'react-router-dom';
import styles from './Details.module.css'

// Icons
import { GoArrowLeft } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
import { FaCode } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { BsBoxArrowUpRight } from "react-icons/bs";

const Details = () => {

    const navigate = useNavigate()

    const location = useLocation()

    const { title, deploy, description, img, tech, github, caracteristicas } = location.state || {};

    return (
        <div className={styles.main_container}>
            <div className={styles.intro}>
                <button onClick={() => navigate("/")}> <GoArrowLeft /> Back</button>
                <p>Projects <IoIosArrowForward /> <span>{title}</span></p>
            </div>
            <div className={styles.container}>
                <div className={styles.item}>
                    <h1>{title}</h1>
                    <hr />
                    <p>{description}</p>
                    <div className={styles.btn}>
                        <a className={styles.btn_grad} href={deploy}><BsBoxArrowUpRight /> Live Demo</a>
                        <a className={styles.btn_grad} href={github}><FaGithub /> Github</a>
                    </div>
                    <h4><FaCode /> Technologies Used</h4>
                    <div className={styles.tech}>
                        {tech && tech.map((tech) =>
                            <p>{tech}</p>
                        )}
                    </div>
                </div>
                <div className={styles.item}>
                    <img src={img} alt="imagem do projeto" />
                    <h4><FaRegStar /> Key Features</h4>
                    <div className={styles.features}>
                        {caracteristicas && caracteristicas.map((caracteristicas) =>
                            <ul>
                                <li>{caracteristicas}</li>
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details