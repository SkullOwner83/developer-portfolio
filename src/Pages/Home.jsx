import { Carousel } from "../Components/Carousel"

export const Home = () => {
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

            <section>
                <h2>TECNOLOGÍAS</h2>

                <Carousel Items={TechStackImages}/>
            </section>
        </main>
    )
}
