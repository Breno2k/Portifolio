
import styles from './Projects.module.css'

import { useState } from 'react';

// Components
import CardsProjects from './CardsProjects';
import NavProject from './NavProject'

// icons
import { FaCode } from "react-icons/fa6";
import { GrCertificate } from "react-icons/gr";
import { BsBoxes } from "react-icons/bs";



const Projects = () => {

    const [navProject, setNavProject] = useState("projetos")

    return (
        <>
            <div className={styles.intro}>
                <h1>Portifolio Shocase</h1>
                <p>Explore minha jornada através de projetos,
                    certificações e conhecimento técnico. Cada seção
                    representa um marco em meu caminho de aprendizado contínuo.</p>
            </div>
            <div className={styles.wrapper}>
                <div className={styles.cards_container} >
                    <div onClick={() => setNavProject("projetos")}>
                        <NavProject
                            active={navProject === "projetos"}
                            icon={<FaCode size={25} />}
                            title="Projetos" />
                    </div>
                    <div onClick={() => setNavProject("certificados")}>
                        <NavProject
                            active={navProject === "certificados"}
                            icon={<GrCertificate size={25} />}
                            title="Certificados" />
                    </div>
                    <div onClick={() => setNavProject("skills")}>
                        <NavProject
                            active={navProject === "skills"}
                            icon={<BsBoxes size={25} />}
                            title="Linguagens de Programação" />
                    </div>
                </div>
            </div>

            <div className={styles.cards_container}>
                {navProject === "projetos" && (
                    <>
                        <CardsProjects description={""} img={""} />
                        <CardsProjects description={""} img={""} />
                        <CardsProjects description={""} img={""} />
                    </>
                )}
                {navProject === "certificados" && (
                    <>
                        <CardsProjects title={""} description={""} img={""} />
                        <CardsProjects title={""} description={""} img={""} />
                    </>
                )}
                {navProject === "skills" && (
                    <>
                        <CardsProjects title={""} description={""} img={""} />
                        <CardsProjects title={""} description={""} img={""} />
                        <CardsProjects title={""} description={""} img={""} />
                        <CardsProjects title={""} description={""} img={""} />
                        <CardsProjects title={""} description={""} img={""} />
                    </>
                )}
            </div>

        </>

    )
}

export default Projects