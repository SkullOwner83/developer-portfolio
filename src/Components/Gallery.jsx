import PropTypes from "prop-types";
import { Modal } from "./Modal";
import { useState } from "react";
import TechImages from "../Data/Images";

export const Gallery = ({ Items }) => {
    const [currentModalImage, setCurrentModalImage] = useState(null);
    const [toggleModal, setToggleModal] = useState(false);

    const StateColor = {
        "Terminado": "#17c42e",
        "Desarrollando": "#0687dd",
        "Pausado": "#f8d300",
    }

    return (
        <div className="Gallery-Component">
            {Object.values(Items).map((projects, index) => (
                <div key={index} className="Item-Container">
                    <div className="Image-Container">
                        <span className="State-Container">
                            <span className="State-Dot" style={{backgroundColor: StateColor[projects.State]}}></span>
                            {projects.State}
                        </span>

                        <div 
                            className="Image-Background" 
                            style={{backgroundImage: `url(${encodeURI(projects.Image)})`}}
                            onClick={() => { setCurrentModalImage(projects.Image); setToggleModal(true); }}
                        />
                    </div>

                    <div className="Info-Container">
                        <div className="Text-Container">
                            <p className="Subtitle">{projects.Name}</p>
                            <p className="Description">{projects.Description}</p>

                            <div className="Tech-Stack">
                                {projects.Technologies.map((tech) => (
                                    <span key={tech} className="Tag-Container">
                                        <img src={TechImages[tech]} alt={tech}/>
                                        <p>{tech}</p>
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="Buttons-Container">
                            { 'Website' in projects ? (<a href={projects.Website} target="_blank"><button className="Convencional-Button">Ir a sitio</button></a>) : null }
                            { 'CodeLink' in projects ? (<a href={projects.CodeLink} target="_blank"><button className="Outlined-Button">Ver código</button></a>) : null }
                            { 'DownloadLink' in projects ? (<a href={projects.DownloadLink} target="_blank"><button className="Convencional-Button">Descargar</button></a>) : null }
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