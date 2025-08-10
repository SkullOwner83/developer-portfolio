import PropTypes from "prop-types";
import { Modal } from "./Modal";
import { useState, useContext } from "react";
import { StateColor } from "../Utilities/Enums";
import { AudioContext } from "../Contexts/AudioContext";
import TechImages from "../Data/Images";

export const Gallery = ({ Items }) => {
    const [currentModalImage, setCurrentModalImage] = useState(null);
    const [toggleModal, setToggleModal] = useState(false);
    const { playsound } = useContext(AudioContext);

    return (
        <div className="Gallery-Component">
            {Object.values(Items).map((project, index) => (
                <div key={index} className="Item-Container">
                    <div className="Image-Container">
                        <span className="State-Container">
                            <span className="State-Dot" style={{backgroundColor: StateColor[project.State]}}></span>
                            {project.State}
                        </span>

                        <div 
                            className="Image-Background" 
                            style={{backgroundImage: `url(${encodeURI(project.Image)})`}}
                            onClick={() => { 
                                playsound("Open")
                                setCurrentModalImage(project.Image); 
                                setToggleModal(true); 
                            }}
                        />
                    </div>

                    <div className="Info-Container">
                        <div className="Text-Container">
                            <p className="Subtitle">{project.Name}</p>
                            <p className="Description">{project.Description}</p>

                            <div className="Tech-Stack">
                                {project.Technologies.map((tech, index) => (
                                    <span key={index} className="Tag-Container">
                                        <img src={TechImages[tech]} alt={tech}/>
                                        <p>{tech}</p>
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="Buttons-Container">
                            {project.Website && (
                                <a href={project.Website} target="_blank" rel="noopener noreferrer">
                                    <div className="Convencional-Button">Ir a sitio</div>
                                </a>
                            )}

                            {project.CodeLink && (
                                <a href={project.CodeLink} target="_blank" rel="noopener noreferrer">
                                    <div className="Outlined-Button">Ver código</div>
                                </a>
                            )}

                            {project.DownloadLink && (
                                <a href={project.DownloadLink} target="_blank" rel="noopener noreferrer">
                                    <div className="Convencional-Button">Descargar</div>
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            ))}

            <Modal isVisible={toggleModal} onToggleVisibility={setToggleModal}>
                <div style={{backgroundImage: `url(${encodeURI(currentModalImage)})`}}/>
            </Modal>
        </div>
    );
}

Gallery.propTypes = {
    Items: PropTypes.objectOf(
        PropTypes.shape({
            Name: PropTypes.string.isRequired,
            Description: PropTypes.string.isRequired,
            Technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
            Website: PropTypes.string,
            CodeLink: PropTypes.string,
            DownloadLink: PropTypes.string,
            State: PropTypes.string,
            Image: PropTypes.string.isRequired
        }).isRequired
    )
}