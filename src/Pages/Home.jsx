import { useContext } from "react";
import { Carousel } from "../Components/Carousel"
import { TechDetails } from "../Components/TechDetails";
import { TechContext } from "../Contexts/TechContext";

export const Home = () => {
    const { currentTech, setCurrentTech, Technologies } = useContext(TechContext);

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

    return (
        <main>
            <section>
                <h1>SOBRE MI</h1>
                <p>Soy una persona apasionada por la tecnología y las herramientas digitales, asi como el desarrollo de aplicaciones y videojuegos. Además, estoy en una constante búsqueda de nuevo conocimiento y desarrollo profesional.</p>
            </section>

            <div className="Solid-Background">
                <section className="TechStack-Section">
                    <h2>TECNOLOGÍAS</h2>
                    <Carousel Items={TechStackImages} Size={80} Gap={24}/>

                    <div className="Grid-Wrap">
                        <TechDetails Technology={currentTech}/>

                        <div className="Flex-Wrap">
                            <div>
                                <p className="Subtitle">APRENDIENDO</p>
                                <div className="Flex-Wrap">

                                    {/* Print only learning technologies from the list*/}
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
        </main>
    )
}
