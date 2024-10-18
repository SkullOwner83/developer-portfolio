import { useState, useContext, useRef } from "react";
import { TechContext } from "../Contexts/TechContext";
import { PlaySound } from "../Functions";

export const Banner = () => {
    //window.open('https://drive.usercontent.google.com/download?id=1lI-V3yQ1eC7SwhAQYlkElD_ltRUovpBM&export=download&authuser=0&confirm=t&uuid=3102a3e6-0a35-432b-9cdb-faf0aa7574cc&at=AN_67v3yWwnkqIILGvsauQuLCREs:1727677563401" target="blank', '_blank')
    const [activeOption, setActiveIndex] = useState(0);
    const { techstackRef, experienceRef, projectsRef } = useContext(TechContext)

    const sndMenuRef = useRef(new Audio("../../src/Assets/Menu.wav")).current;
    sndMenuRef.volume = 1;

    const menuOptions = {
        startGame: {
            Name: "Iniciar juego",
            Function: () => {  }
        },

        Technologies: {
            Name: "Tecnologías",
            Function: () => { techstackRef.current.scrollIntoView({ behavior: "smooth", block: "start" }); }
        },

        Experience: {
            Name: "Experiencia",
            Function: () => { experienceRef.current.scrollIntoView({ behavior: "smooth", block: "start" }); }
        },

        Projects: {
            Name: "Proyectos",
            Function: () => { projectsRef.current.scrollIntoView({ behavior: "smooth", block: "start" }); }
        },

        Options: {
            Name: "Opciones",
            Function: () => {  }
        }
    }

    return (
        <div className="Banner">
            <div className="Left-Container">
                <div className="Info-Container">
                    <div className="Photo-Container"/>

                    <div className="Biografy-Container">
                        <div className="Text-Container">
                            <p className="Biografy-Name">JAVIER GUZMAN CRUZ</p>
                            <p className="Biografy-Description">Desarrollador de Software</p>
                        </div>
                        
                        <div className="Buttons-Container">
                            <button className="Convencional-Button">Curriculum</button>
                            <button className="Outlined-Button">Contacto</button>
                        </div>
                    </div>
                </div>

                <ul>
                    {Object.values(menuOptions).map((item, index) => (
                        <li key={index}
                            className={activeOption === index ? 'Selected' : ''}
                            onClick={item.Function}
                            onMouseEnter={() => { 
                                setActiveIndex(index); 
                                
                                if (activeOption != index) {
                                    PlaySound(sndMenuRef); 
                                }
                            }}
                        >
                            {item.Name}
                        </li>
                    ))}
                </ul>

                <div className="Logos-Container">
                    <a href="https://github.com/SkullOwner83" title="Pefil de Github" target="_blank"><img src="/Icons/Github.png" alt="Github"/></a>
                    <a href="https://gamejolt.com/@SkullOwner/games" title="Perfil de Gamejolt" target="_blank"><img src="/Icons/Gamejolt.png" alt="Gamejolt"/></a>
                </div>
            </div>

            <div className="Right-Container">
                
            </div>
        </div>
    )
}