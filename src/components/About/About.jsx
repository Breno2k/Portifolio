import styles from './About.module.css'

import img from '../../assets/perfil.jpg'

import { Link } from 'react-router-dom';

// Icons
import { BsFileEarmarkTextFill } from "react-icons/bs";
import { FaCode } from "react-icons/fa6";
import { FiStar } from "react-icons/fi";
import { GrCertificate } from "react-icons/gr";
import { GiSandsOfTime } from "react-icons/gi";
import { MdOutlineLanguage } from "react-icons/md";

const About = () => {
    return <div className={styles.about}>
        <div className={styles.intro}>
            <h1>Sobre mim</h1>
            <p><span><FiStar /></span> Transformando ideias em experiências digitais. <span><FiStar /></span></p>
        </div>
        <div className={styles.container}>
            <div className={styles.apresentacao}>
                <h1><span>Olá, eu sou</span><br /> Breno Lucas Souza de Albuquerque Melo</h1>
                <p>Sou graduando em Análise e
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
            <div className={styles.img_perfil}>
                <img src={img} alt="foto home" />
            </div>
        </div>
        <div className={styles.buttons}>
            <button className={styles.buttons_rosa}>
                <BsFileEarmarkTextFill />
                <Link to="#">
                    <strong> Acessar CV</strong>
                </Link>
            </button>
            <button>
                <FaCode />
                <Link to="#">
                    <strong> Ver código</strong>
                </Link>
            </button>
        </div>
        <div className={styles.container_dois}>
            <div className={styles.card}>
                <div className={styles.container_tres}>
                    <div className={styles.icon}>
                        <FaCode size={30} />
                    </div>
                    <h1>11</h1>
                </div>
                <h4>Total de Projetos</h4>
                <p>Soluções web inovadoras. </p>
            </div>
            <div className={styles.card}>
                <div className={styles.container_tres}>
                    <div className={styles.icon}>
                        <GrCertificate size={30} />
                    </div>
                    <h1>11</h1>
                </div>
                <h4>Certificados</h4>
                <p>Validação de habilidades profissionais. </p>
            </div>
            <div className={styles.card}>
                <div className={styles.container_tres}>
                    <div className={styles.icon}>
                        <MdOutlineLanguage size={30} />
                    </div>
                    <h1>11</h1>
                </div>
                <h4>Anos de Experiência</h4>
                <p>Jornadas de aprendizado contínuo </p>
            </div>
        </div>

    </div>



}

export default About