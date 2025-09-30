// styles
import styles from './Home.module.css'

// icons
import { FaGithub } from "react-icons/fa6";
import { BsInstagram, BsLinkedin } from "react-icons/bs";

// videos
import video1 from '../../assets/video/gif.gif'

// hook
import useAOS from '../../hooks/useAOS';


const Home = () => {

    useAOS();

    return (
        <div className={styles.home}>
            <div className={styles.container}>
                <h1 data-aos="fade-up">
                    Frontend <span data-aos="fade-up">Developer</span>
                </h1>
                <div className={styles.intro}>
                    <p data-aos="fade-up" data-aos-duration="1200">
                        Em busca de oportunidades para criar soluções
                        inovadoras, afim de otimizar processos e
                        gerar impacto positivo em negócios.
                    </p>
                </div>

                <div data-aos="fade-up" data-aos-duration="1400" className={styles.program}>
                    <p>React</p>
                    <p>JavaScript</p>
                    <p>Next.js</p>
                    <p>TypeScript</p>
                </div>
                <div data-aos="fade-up" data-aos-duration="1600" className={styles.buttons_social}>
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
            <div data-aos="fade-left" className={styles.img_home}>
                <img src={video1} alt="gif animado" />
            </div>
        </div>

    )
}

export default Home