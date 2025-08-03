import { useContext, useEffect, useState } from "react";
import { Carousel } from "../Components/Carousel"
import { TechDetails } from "../Components/TechDetails";
import { TechContext } from "../Contexts/TechContext";
import { Timeline } from "../Components/Timeline";
import { Gallery } from "../Components/Gallery";
import TechImages from "../Data/Images";

export const Home = () => {
    const { currentTech, setCurrentTech, techstackRef, experienceRef, projectsRef, Technologies, Experience, Projects } = useContext(TechContext);
    const [isMobile, setIsMobile] = useState(false);
    const technologiesArray = Object.values(Technologies);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 800) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        }

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <main>
            <section>
                <h1>SOBRE MÍ</h1>
                <p>Soy un desarrollador con experiencia en la creación de herramientas enfocadas en la experiencia de usuario y en el desarrollo de videojuegos indies. Disfruto construir aplicaciones responsivas, así como diseñando estilos y controles personalizados. Estoy en constante crecimiento profesional y aprendizaje, participando activamente en proyectos personales e independientes.</p>
            </section>

            <div className="Solid-Background" ref={techstackRef}>
                <section className="TechStack-Section">
                    <h2>TECNOLOGÍAS</h2>
                    <Carousel Size={!isMobile ? 80 : 64} Gap={!isMobile ? 24 : 16}/>

                    <div className="Grid-Wrap">
                        <TechDetails 
                            Technology={currentTech}
                            on_previous={() => {
                                const index = technologiesArray.indexOf(currentTech);
                                const newIndex = (index - 1 + technologiesArray.length) % technologiesArray.length;
                                setCurrentTech(technologiesArray[newIndex]);
                            }}
                            on_next={() => {
                                const index = technologiesArray.indexOf(currentTech);
                                const newIndex = (index + 1) % technologiesArray.length;
                                setCurrentTech(technologiesArray[newIndex]);
                            }}
                        />

                        <div className="Another-Technologies">
                            <div>
                                <p className="Subtitle">APRENDIENDO</p>
                                <div className="Flex-Wrap">
                                    {/* Print only learning technologies from the list */
                                    Object.values(Technologies).map((item, index) => (
                                        item.Section == "Learning" && (
                                            <img 
                                                key={index} 
                                                src={TechImages[item.Name]}
                                                onClick={() => setCurrentTech(item)}
                                                className="Icon-Item"
                                            />
                                        )
                                    ))}
                                </div>
                            </div>

                            <div>
                                <p className="Subtitle">DISEÑO</p>
                                <div className="Flex-Wrap">
                                    {/* Print only design technologies from the list */
                                    Object.values(Technologies).map((item, index) => (
                                        item.Section == "Design" && (
                                            <img 
                                                key={index} 
                                                src={TechImages[item.Name]}
                                                onClick={() => setCurrentTech(item)}
                                                className="Icon-Item"
                                            />
                                        )
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <section ref={experienceRef}>
                <h3>EXPERIENCIA</h3>
                <Timeline Nodes={Experience}/>
            </section>

            <section ref={projectsRef}>
                <h4>PROYECTOS</h4>
                <Gallery Items={Projects}/>
            </section>
        </main>
    )
}
