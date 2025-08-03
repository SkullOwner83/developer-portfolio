import { useState, useContext, useRef } from "react";
import { TechContext } from "../Contexts/TechContext";

export const Banner = () => {
    const [activeOption, setActiveIndex] = useState(0);
    const { techstackRef, experienceRef, projectsRef } = useContext(TechContext)

    const sndMenuRef = useRef(new Audio("../../Sounds/Menu.wav")).current;
    sndMenuRef.volume = 1;

    const menuOptions = {
        startGame: {
            Name: "Iniciar juego",
            Function: () => { alert("Portafolio en desarrollo. Algunas funciones aun no estan disponibles."); }
        },

        Technologies: {
            Name: "Tecnologías",
            Function: () => techstackRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
        },

        Experience: {
            Name: "Experiencia",
            Function: () => experienceRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
        },

        Projects: {
            Name: "Proyectos",
            Function: () => projectsRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
        },

        Options: {
            Name: "Opciones",
            Function: () => {  }
        }
    }

    return (
        <div className="Banner">
            <div className="Left-Container">
                <div className="Main-Container">
                    <div className="Info-Container">
                        <div className="Photo-Container"/>
                        <div className="Biografy-Container">
                            <div className="Text-Container">
                                <p className="Biografy-Name">JAVIER GUZMAN CRUZ</p>
                                <p className="Biografy-Description">Desarrollador de Software</p>
                            </div>
                    
                            <div className="Buttons-Container">
                                <a href="https://drive.usercontent.google.com/download?id=1m_7TWTDZ0_fIX0kEpzgQdK_s6WAauy3o&export=download&authuser=1&confirm=t&uuid=fc85c444-b067-453f-b30c-97c23e5c4de7&at=AN8xHorWS7mopRfuUJISjRK8_rj6:1753917358298">
                                    <div className="Convencional-Button">Curriculum</div>
                                </a>

                                <a href="mailto:javierguzman.dev@gmail.com">
                                    <div className="Outlined-Button">Contacto</div>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <ul className="Navigation-Menu">
                        {Object.values(menuOptions).map((item, index) => (
                            <li key={index}
                                className={activeOption === index ? 'Selected' : ''}
                                onClick={item.Function}
                                onMouseEnter={() => {
                                    setActiveIndex(index);
                    
                                    if (activeOption != index) {
                                        sndMenuRef.play();
                                    }
                                }}
                            >
                                {item.Name}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="Logos-Container">
                    <a href="https://github.com/SkullOwner83" title="Pefil de Github" target="_blank"><img src="/Icons/Github.png" alt="Github"/></a>
                    <a href="https://linkedin.com/in/javier-guzmán-cruz-73284a304" title="Perfil de LinkedIn" target="_blank"><img src="/Icons/LinkedIn.png" alt="LinkedIng"/></a>
                    <a href="https://gamejolt.com/@SkullOwner/games" title="Perfil de Gamejolt" target="_blank"><img src="/Icons/Gamejolt.png" alt="Gamejolt"/></a>
                </div>
            </div>

            <div className="Right-Container">
                
            </div>
        </div>
    )
}