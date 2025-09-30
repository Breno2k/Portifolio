// React router
import { useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

// styles
import styles from './Details.module.css'

// hooks
import useAOS from '../hooks/useAOS';

// Icons
import { GoArrowLeft } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
import { FaCode } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { BsStack } from "react-icons/bs";
import { IoIosCode } from "react-icons/io";

const Details = () => {

    useAOS();

    const location = useLocation()

    const { title, deploy, description, img, tech, github, caracteristicas } = location.state || {};

    return (
        <div className={styles.main_container}>
            <div className={styles.intro}>
                <HashLink smooth to="/#projects">
                    <button> <GoArrowLeft /> Back</button>
                </HashLink>
                <p>Projects <IoIosArrowForward /> <span>{title}</span></p>
            </div>
            <div className={styles.container}>
                <div data-aos="fade-right" className={styles.item}>
                    <h1>{title}</h1>
                    <div className={styles.hr} ></div>
                    <p>{description}</p>
                    <div className={styles.wrapper}>
                        <div className={styles.cards}>
                            <div className={styles.total_Tech}>
                                <div className={styles.icon}>
                                    <FaCode color="#6d46fd" size={20} />
                                </div>
                                <div className={styles.texts}>
                                    <h3>{tech.length}</h3>
                                    <p>Total Technologies</p>
                                </div>
                            </div>
                            <div className={styles.total_Features}>
                                <div className={styles.icon}>
                                    <BsStack color="#f390fa" size={20} />
                                </div>
                                <div className={styles.texts}>
                                    <h3>{caracteristicas.length}</h3>
                                    <p>Total Caracteristivcas</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.btn}>
                        <a className={styles.btn_grad_um} href={deploy}><BsBoxArrowUpRight /> Live Demo</a>
                        <a className={styles.btn_grad_dois} href={github}><FaGithub /> Github</a>
                    </div>
                    <h4><FaCode size={20} /> Technologies Used</h4>
                    <div className={styles.tech}>
                        {tech && tech.map((tech, index) =>
                            <p key={index}><IoIosCode size={20} /> {tech}</p>
                        )}
                    </div>
                </div>
                <div data-aos="fade-left" className={styles.item}>
                    <img src={img} alt="imagem do projeto" />
                    <div className={styles.features}>
                        <h4><FaRegStar color="yellow" size={20} /> Key Features</h4>
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