import styles from './Home.module.css'
import { FaGithub } from "react-icons/fa6";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import img1 from '../../assets/astronauta.png'


const Home = () => {
    return (
        <div className={styles.home}>
            <div className={styles.container}>
                <h1>Desenvolvedor <span>Front-end</span></h1>
                <p> Em busca de oportunidades para criar soluções
                    inovadoras, afim de otimizar processos e
                    gerar impacto positivo em negócios.
                </p>
                <div className={styles.program}>
                    <p>React</p>
                    <p>JavaScript</p>
                    <p>Next.js</p>
                    <p>TypeScript</p>
                </div>
                <div className={styles.buttons_social}>
                    <a href="https://github.com/Breno2k">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/breno-melo-69602b267/">
                        <BsLinkedin />
                    </a>
                    <a href="https://www.instagram.com/brenomelo9/">
                        <BsInstagram />
                    </a>
                </div>
            </div>
            <div className={styles.img_home}>
                <img src={img1} alt="foto home" />
            </div>
        </div>

    )
}

export default Home