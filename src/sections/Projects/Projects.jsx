
import styles from './Projects.module.css'

import { useState } from 'react';

// Imagens
import img1 from '../../assets/imagens/focus.png'
import img2 from '../../assets/imagens/central_pet.png'
import img3 from '../../assets/imagens/toten.png'
import img4 from '../../assets/imagens/flappy_bird.png'
import img5 from '../../assets/imagens/mystery_word.png'

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
                        <CardsProjects title="FocusFlow" description="FocusFlow uma ferramenta para turbinar sua produtividade! Inspirado na Técnica Pomodoro, você consegue controla suas sessões de concentração e pausas personalizadas de acordo com sua preferência." img={img1} />
                        <CardsProjects title="Central Pet" description="Central Pet é um site que cuida do seu pet, capaz de armazenar cartões de vacina e marcar consultas online com veterinários" img={img2} />
                        <CardsProjects title="Toten de autoatendimento" description="Um totem de autoatendimento digital moderno para redes de fast-food, permitindo que clientes realizem pedidos de forma intuitiva, personalizem seus combos e acompanhem o status de preparação em tempo real." img={img3} />
                        <CardsProjects title={"Clumsy Bird"} description={"Clumsy Bird Master é um projeto de código aberto para construir e personalizar jogos no estilo Flappy Bird usando MelonJS."} img={img4} />
                        <CardsProjects title={"Mystery Word"} description={"Jogo em que você desvenda a palavra misteriosa com base em uma dica, acertando letras até completá-la!"} img={img5} />
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