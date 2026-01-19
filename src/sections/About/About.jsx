// styles
import styles from './About.module.css'

// imagens
import img from '../../assets/imagens/perfil.jpg'

// react router
import { Link } from 'react-router-dom';

// hook
import useAOS from '../../hooks/useAOS';

// Icons
import { BsFileEarmarkTextFill } from "react-icons/bs";
import { FaCode } from "react-icons/fa6";
import { FiStar } from "react-icons/fi";
import { GrCertificate } from "react-icons/gr";
import { MdOutlineLanguage } from "react-icons/md";

const About = () => {

    useAOS();

    return <div className={styles.about}>
        <div className={styles.intro}>
            <h1 data-aos="fade-up">Sobre mim</h1>
            <p data-aos="fade-up" data-aos-duration="1200"><span><FiStar /></span> Transformando ideias em experiências digitais. <span><FiStar /></span></p>
        </div>
        <div className={styles.container}>
            <div className={styles.apresentacao}>
                <h1 data-aos="fade-right" data-aos-duration="1400">
                    <span>Olá, eu sou</span><br /> Breno Lucas Souza de Albuquerque Melo
                </h1>
                <p data-aos="fade-right" data-aos-duration="1600">Sou graduado em Análise e
                    Desenvolvimento de Sistemas e já
                    atuei como desenvolvedor de
                    automações e agentes de inteligência
                    artificial, com foco em otimização de
                    processos e gestão de redes sociais.
                    Busco constantemente aprimorar
                    minhas habilidades em tecnologias
                    front-end e back-end, trabalhando de
                    forma colaborativa e orientada a
                    resultados.
                </p>
            </div>
            <div data-aos="fade-left" data-aos-duration="1400" className={styles.img_perfil}>
                <img src={img} alt="foto home" />
            </div>
        </div>
        <div data-aos="fade-right" data-aos-duration="1600" className={styles.buttons}>
            <Link to="https://drive.google.com/file/d/1k2OdsCowruyKlBe53aQoLOoUi617zg0L/view?usp=sharing" className={styles.btn_grad}>
                <BsFileEarmarkTextFill />
                <strong> Acessar CV</strong>
            </Link>
            <a href="#project" className={styles.btn_grad_two}>
                <FaCode />
                Ver código
            </a>
        </div>
        <div className={styles.container_dois}>
            <div data-aos="fade-right" data-aos-duration="1400" className={styles.card}>
                <div className={styles.card_inner}>
                    <div className={styles.container_tres}>
                        <div className={styles.icon}>
                            <FaCode size={30} />
                        </div>
                        <h1>6</h1>
                    </div>
                    <h6>Total de Projetos</h6>
                    <p>Soluções web inovadoras. </p>
                </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1400" className={styles.card}>
                <div className={styles.card_inner}>
                    <div className={styles.container_tres}>
                        <div className={styles.icon}>
                            <GrCertificate size={30} />
                        </div>
                        <h1>9</h1>
                    </div>
                    <h6>Certificados</h6>
                    <p>Validação de habilidades profissionais. </p>
                </div>
            </div>
            <div data-aos="fade-left" data-aos-duration="1400" className={styles.card}>
                <div className={styles.card_inner}>
                    <div className={styles.container_tres}>
                        <div className={styles.icon}>
                            <MdOutlineLanguage size={30} />
                        </div>
                        <h1>4</h1>
                    </div>
                    <h6>Anos de Experiência</h6>
                    <p>Jornadas de aprendizado contínuo </p>
                </div>
            </div>
        </div>

    </div>



}

export default About