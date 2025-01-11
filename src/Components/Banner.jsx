import { useState, useContext, useRef } from "react";
import { TechContext } from "../Contexts/TechContext";
import { PlaySound } from "../Functions";

export const Banner = () => {
    const [activeOption, setActiveIndex] = useState(0);
    const { techstackRef, experienceRef, projectsRef } = useContext(TechContext)

    const sndMenuRef = useRef(new Audio("/Menu.wav")).current;
    sndMenuRef.volume = 1;

    const menuOptions = {
        startGame: {
            Name: "Iniciar juego",
            Function: () => { alert("Portafolio en desarrollo. Algunas funciones aun no estan disponibles."); }
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
                            <a href="https://drive.usercontent.google.com/download?id=1kGy_7Lya8GEbf0pgRxrChZ9jh-Rx96oO&export=download&authuser=0&confirm=t&uuid=ac28a554-b37b-4da5-aa1d-ae97d84a6c7e&at=AN_67v0RF1gh4zHORFy9Sl0WEicV:1729331899253">
                                <div className="Convencional-Button">Curriculum</div>
                            </a>
                            <a href="mailto:skullowner83@gmail.com">
                                <div className="Outlined-Button">Contacto</div>
                            </a>
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
                    <a href="https://www.linkedin.com/in/javier-guzman-cruz-73284a304/" title="Perfil de LinkedIn" target="_blank"><img src="/Icons/LinkedIn.png" alt="LinkedIng"/></a>
                    <a href="https://gamejolt.com/@SkullOwner/games" title="Perfil de Gamejolt" target="_blank"><img src="/Icons/Gamejolt.png" alt="Gamejolt"/></a>
                </div>
            </div>

            <div className="Right-Container">
                
            </div>
        </div>
    )
}