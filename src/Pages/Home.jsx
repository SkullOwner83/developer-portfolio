import { useContext, useEffect, useState } from "react";
import { Carousel } from "../Components/Carousel"
import { TechDetails } from "../Components/TechDetails";
import { TechContext } from "../Contexts/TechContext";
import { Timeline } from "../Components/Timeline";
import { Gallery } from "../Components/Gallery";

export const Home = () => {
    const { currentTech, setCurrentTech, techstackRef, experienceRef, projectsRef, Technologies, Experience, Projects } = useContext(TechContext);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 800) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        }

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <main>
            <section>
                <h1>SOBRE MÍ</h1>
                <p>Soy una persona apasionada por la tecnología y las herramientas digitales, asi como el desarrollo de aplicaciones y videojuegos. Además, estoy en una constante búsqueda de nuevo conocimiento y desarrollo profesional.</p>
            </section>

            <div className="Solid-Background" ref={techstackRef}>
                <section className="TechStack-Section">
                    <h2>TECNOLOGÍAS</h2>
                    <Carousel Size={!isMobile ? 80 : 64} Gap={!isMobile ? 24 : 16}/>

                    <div className="Grid-Wrap">
                        <TechDetails Technology={currentTech}/>

                        <div className="Flex-Wrap">
                            <div>
                                <p className="Subtitle">APRENDIENDO</p>
                                <div className="Flex-Wrap">
                                    {/* Print only learning technologies from the list */}
                                    {Object.values(Technologies).map((item, index) => (
                                        item.Section == "Learning" ? (
                                            <img 
                                                key={index} 
                                                src={item.IconPath}
                                                onClick={() => setCurrentTech(item)}
                                            />
                                        )
                                        : null
                                    ))}
                                </div>
                            </div>

                            <div>
                                <p className="Subtitle">DISEÑO</p>
                                <div className="Flex-Wrap">
                                    {/* Print only design technologies from the list */}
                                    {Object.values(Technologies).map((item, index) => (
                                            item.Section == "Design" ? (
                                                <img 
                                                    key={index} 
                                                    src={item.IconPath}
                                                    onClick={() => setCurrentTech(item)}
                                                />
                                            )
                                            : null
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
                <Gallery Nodes={Projects}/>
            </section>
        </main>
    )
}
