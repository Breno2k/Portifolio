
import styles from './Projects.module.css'

import { useState } from 'react';

// Imagens
import img1 from '../../assets/imagens/focus.png'
import img2 from '../../assets/imagens/central_pet.png'
import img3 from '../../assets/imagens/toten.png'
import img4 from '../../assets/imagens/flappy_bird.png'
import img5 from '../../assets/imagens/mystery_word.png'
import cert1 from '../../assets/imagens/cert1.jpg'
import cert2 from '../../assets/imagens/cert2.jpg'
import cert3 from '../../assets/imagens/cert3.jpg'
import cert4 from '../../assets/imagens/cert4.jpg'
import cert5 from '../../assets/imagens/cert5.jpg'
import cert6 from '../../assets/imagens/cert6.jpg'
import cert7 from '../../assets/imagens/cert7.jpg'
import cert8 from '../../assets/imagens/cert8.jpg'
import cert9 from '../../assets/imagens/cert9.png'

// hook
import useAOS from '../../hooks/useAOS';

// Components
import CardsProjects from './CardsProjects';
import NavProject from './NavProject'
import CardsCertificates from './CardsCertificates';
import TechStack from './TechStack';

// icons
import { FaCode } from "react-icons/fa6";
import { GrCertificate } from "react-icons/gr";
import { BsBoxes } from "react-icons/bs";

// SVG icons
import javascript from '../../assets/javascript.svg'
import html from '../../assets/html.svg'
import css from '../../assets/css.svg'
import react from '../../assets/react.svg'
import next from '../../assets/next.svg'
import mysql from '../../assets/mysql.svg'
import postgresql from '../../assets/postgresql.svg'
import vite from '../../assets/vite.svg'
import bootstrap from '../../assets/bootstrap.svg'
import tailwind from '../../assets/tailwind.svg'
import git from '../../assets/git.svg'




const Projects = () => {

    useAOS();

    const [navProject, setNavProject] = useState("projetos")

    return (
        <div className={styles.projects}>
            <div className={styles.intro}>
                <h1 data-aos="fade-up">Portifolio Shocase</h1>
                <p data-aos="fade-up" data-aos-duration="1100">Explore minha jornada através de projetos,
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

            <div id="projects" className={styles.cards_container}>
                {navProject === "projetos" && (
                    <>
                        <CardsProjects
                            title="FocusFlow"
                            description="FocusFlow uma ferramenta para turbinar sua produtividade! Inspirado na Técnica Pomodoro, você consegue controla suas sessões de concentração e pausas personalizadas de acordo com sua preferência."
                            img={img1}
                            tech={["ReactJS", "Shadcn", "Tailwind CSS", "CSS Modules", "Vite", "Vercel"]}
                            github="https://github.com/Breno2k/FocusFlow"
                            caracteristicas={["Função de cronômetro para resgistrar o tempo corrido.", "Configuração personalizada dos períodos de foco.", "Configuração personalizada dos períodos de pausa."]}
                            deploy="https://foca-flow.vercel.app/" />
                        <CardsProjects
                            title="Mystery Word"
                            description="Jogo em que você desvenda a palavra misteriosa com base em uma dica, acertando letras até completá-la!"
                            img={img5}
                            tech={["ReactJS", "CSS"]}
                            github="https://github.com/Breno2k/Mystery-word"
                            caracteristicas={["Limite de tentativas", "Pontuação por palavra acertada", "Váriadade de categorias"]}
                            deploy="https://breno2k.github.io/Mystery-word/" />
                        <CardsProjects
                            title="Toten de autoatendimento"
                            description="Um totem de autoatendimento digital moderno para redes de fast-food, permitindo que clientes realizem pedidos de forma intuitiva, personalizem seus combos e acompanhem o status de preparação em tempo real."
                            img={img3}
                            tech={["Next.JS", "TypeScript", "Tailwind CSS", "Prisma", "Vercel", "Shadcn"]}
                            github="https://github.com/Breno2k/toten-donalds"
                            caracteristicas={["Cardápio estruturado com filtros", "Sistema de carrinho", "Validação de CPF"]}
                            deploy="https://toten-donalds.vercel.app/fsw-donalds" />
                        <CardsProjects
                            title="Clumsy Bird"
                            description="Clumsy Bird Master é um projeto de código aberto para construir e personalizar jogos no estilo Flappy Bird usando MelonJS."
                            img={img4}
                            tech={["JavaScript", "HTML", "CSS"]}
                            github="https://github.com/Breno2k/clumsy-bird-master"
                            caracteristicas={["Estrutura Modular e Organizada", "Estrutura Modular e Organizada", "Compatibilidade com MelonJS"]}
                            deploy="ellisonleao.github.io/clumsy-bird/" />
                        <CardsProjects
                            title="Central Pet"
                            description="Central Pet é um site que cuida do seu pet, capaz de armazenar cartões de vacina e marcar consultas online com veterinários"
                            img={img2}
                            tech={["HTML", "CSS", "JavaScript", "PHP", "Bootstrap"]}
                            github="https://github.com/Breno2k/Central-Pet"
                            caracteristicas={["Sistema de login de usuário", "Armazenamento de cartões de vacina", "Sistema de marcar consultas com veterinários"]}
                            deploy="https://central-pet.onrender.com/" />
                    </>
                )}
                {navProject === "certificados" && (
                    <>
                        <CardsCertificates img={cert1} />
                        <CardsCertificates img={cert2} />
                        <CardsCertificates img={cert3} />
                        <CardsCertificates img={cert4} />
                        <CardsCertificates img={cert5} />
                        <CardsCertificates img={cert6} />
                        <CardsCertificates img={cert7} />
                        <CardsCertificates img={cert8} />
                        <CardsCertificates img={cert9} />
                    </>
                )}
            </div>
            {navProject === "skills" && (
                <>
                    <div className={styles.container_svg}>
                        <TechStack img={html} name="HTML" />
                        <TechStack img={css} name="CSS" />
                        <TechStack img={javascript} name="JavaScript" />
                        <TechStack img={react} name="React" />
                        <TechStack img={tailwind} name="Tailwind CSS" />
                        <TechStack img={next} name="Next.js" />
                        <TechStack img={vite} name="Vite" />
                        <TechStack img={bootstrap} name="Bootstrap" />
                        <TechStack img={git} name="Git" />
                        <TechStack img={mysql} name="MySQL" />
                        <TechStack img={postgresql} name="PostgreSQL" />
                    </div>
                </>
            )
            }
        </div>


    )
}

export default Projects