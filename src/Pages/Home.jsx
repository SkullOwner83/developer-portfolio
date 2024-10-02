import { Carousel } from "../Components/Carousel"
import { TechDetails } from "../Components/TechDetails";
import { useRef } from "react";
import { useState } from "react";
import technologies from "../Data/Technologies.js";

export const Home = () => {
    const [currentTech, setCurrentTech] = useState(technologies.HTML);

    const TechStackImages = [
        "../../src/Assets/Logos/C Sharp.png",
        "../../src/Assets/Logos/XAML.png",
        "../../src/Assets/Logos/HTML.png",
        "../../src/Assets/Logos/CSS.png",
        "../../src/Assets/Logos/Javascript.png",
        "../../src/Assets/Logos/React.png",
        "../../src/Assets/Logos/Vite.png",
        "../../src/Assets/Logos/Git.png",
        "../../src/Assets/Logos/My SQL.png",
        "../../src/Assets/Logos/Sass.png",
        "../../src/Assets/Logos/Boostrap.png",
        "../../src/Assets/Logos/Game Maker Studio 2.png"
    ]

    const technologiesSectionRef = useRef(null);

    return (
        <main>
            <section>
                <h1>SOBRE MI</h1>
                <p>Soy una persona apasionada por la tecnología y las herramientas digitales, asi como el desarrollo de aplicaciones y videojuegos. Además, estoy en una constante búsqueda de nuevo conocimiento y desarrollo profesional.</p>
            </section>

            <div className="Solid-Background">
                <section className="TechStack-Section" ref={technologiesSectionRef}>
                    <h2>TECNOLOGÍAS</h2>
                    <Carousel Items={TechStackImages} Size={80} Gap={24}/>
                    <div className="Grid-Wrap">
                        <TechDetails Technology={currentTech}/>

                        <div className="Flex-Wrap">
                            <div>
                                <p className="Subtitle">APRENDIENDO</p>
                                <div className="Flex-Wrap">
                                    <img src="../../src/Assets/Logos/Python.png"/>
                                    <img src="../../src/Assets/Logos/C Plus Plus.png"/>
                                    <img src="../../src/Assets/Logos/Typescript.png"/>
                                    <img src="../../src/Assets/Logos/Unity.png"/>
                                </div>
                            </div>
                            <div>
                                <p className="Subtitle">DISEÑO</p>
                                <div className="Flex-Wrap">
                                    <img src="../../src/Assets/Logos/Photoshop.png"/>
                                    <img src="../../src/Assets/Logos/Illustrator.png"/>
                                    <img src="../../src/Assets/Logos/XD.png"/>
                                    <img src="../../src/Assets/Logos/Figma.png"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}
