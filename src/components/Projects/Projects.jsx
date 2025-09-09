import NavProject from './NavProject'
import styles from './Projects.module.css'

// icons
import { FaCode } from "react-icons/fa6";
import { GrCertificate } from "react-icons/gr";
import { BsBoxes } from "react-icons/bs";


const Projects = () => {
    return (
        <>
            <div className={styles.intro}>
                <h1>Portifolio Shocase</h1>
                <p>Explore minha jornada através de projetos,
                    certificações e conhecimento técnico. Cada seção
                    representa um marco em meu caminho de aprendizado contínuo.</p>
            </div>
            <div className={styles.cards_container} >
                <NavProject icon={<FaCode size={25} />} title="Projetos" />
                <NavProject icon={<GrCertificate size={25} />} title="Certificados" />
                <NavProject icon={<BsBoxes size={25} />} title="Linguagens de Programação" />
            </div>
            <div className="card" style={{ width: "18rem" }}>
                <img src="..." class="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </>

    )
}

export default Projects