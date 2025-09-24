import { useLocation, useNavigate } from 'react-router-dom';
import styles from './Details.module.css'

// Icons
import { GoArrowLeft } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
import { FaCode } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { BsStack } from "react-icons/bs";

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
                    <div className={styles.wrapper}>
                        <div className={styles.cards}>
                            <div className={styles.total_Tech}>
                                <div className={styles.icon}>
                                    <FaCode size={20} />
                                </div>
                                <div className="texts">
                                    <h3>12</h3>
                                    <p>Total Technologies</p>
                                </div>
                            </div>
                            <div className={styles.total_Features}>
                                <div className={styles.icon}>
                                    <BsStack size={20} />
                                </div>
                                <div className="texts">
                                    <h3>12</h3>
                                    <p>Total Technologies</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.btn}>
                        <a className={styles.btn_grad} href={deploy}><BsBoxArrowUpRight /> Live Demo</a>
                        <a className={styles.btn_grad} href={github}><FaGithub /> Github</a>
                    </div>
                    <h4><FaCode size={20} /> Technologies Used</h4>
                    <div className={styles.tech}>
                        {tech && tech.map((tech, index) =>
                            <p key={index}>{tech}</p>
                        )}
                    </div>
                </div>
                <div className={styles.item}>
                    <img src={img} alt="imagem do projeto" />
                    <div className={styles.features}>
                        <h4><FaRegStar size={20} /> Key Features</h4>
                        <ul>
                            {caracteristicas && caracteristicas.map((caracteristicas, index) =>
                                <li key={index}>{caracteristicas}</li>

                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Details