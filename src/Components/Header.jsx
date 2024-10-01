import { useState } from "react";

export const Header = () => {
    //window.open('https://drive.usercontent.google.com/download?id=1lI-V3yQ1eC7SwhAQYlkElD_ltRUovpBM&export=download&authuser=0&confirm=t&uuid=3102a3e6-0a35-432b-9cdb-faf0aa7574cc&at=AN_67v3yWwnkqIILGvsauQuLCREs:1727677563401" target="blank', '_blank')

    const menuOptions = ['Iniciar juego', 'Tecnologías', 'Experiencia', 'Proyectos'];
    const [activeOption, setActiveIndex] = useState(0);

    return (
        <header>
            <div className="Left-Container">
                <div className="Info-Container">
                    <div className="Photo-Container"/>

                    <div className="Biografy-Container">
                        <div className="Text-Container">
                            <p className="Biografy-Name">JAVIER GUZMAN CRUZ</p>
                            <p className="Biografy-Description">Desarrollador de software</p>
                        </div>
                        
                        <div className="Buttons-Container">
                            <button className="Convencional-Button">Curriculum</button>
                            <button className="Outlined-Button">Contacto</button>
                        </div>
                    </div>
                </div>

                <ul>
                    {menuOptions.map((item, index) => (
                        <li
                            key={index}
                            onMouseEnter={() => setActiveIndex(index)}
                            className={activeOption === index ? 'Selected' : ''}
                        >
                            {item}
                        </li>
                    ))}
                </ul>

                <div className="Logos-Container">
                    <a href="https://github.com/SkullOwner83" title="Pefil de Github" target="_blank"><img src="../../src/Assets/Github.png" alt="Github"/></a>
                    <a href="https://gamejolt.com/@SkullOwner/games" title="Perfil de Gamejolt" target="_blank"><img src="../../src/Assets/Gamejolt.png"/></a>
                </div>
            </div>

            <div className="Right-Container">
                
            </div>
        </header>
    )
}