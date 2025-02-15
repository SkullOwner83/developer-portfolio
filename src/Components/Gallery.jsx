import PropTypes from "prop-types";
import { Modal } from "./Modal";
import { useState } from "react";
import TechImages from "../Data/Images";

export const Gallery = ({ Nodes }) => {
    const [currentModalImage, setCurrentModalImage] = useState(null);
    const [toggleModal, setToggleModal] = useState(false);

    function GetStateColor(State) {
        switch (State) {
            case "Terminado":
              return { backgroundColor: "#17c42e" };
            case "Desarrollando":
              return { backgroundColor: "#0687dd" };
            case "Pausado":
              return { backgroundColor: "#f8d300" };
            default:
              return { backgroundColor: "Gray" };
        }
    }

    return (
        <div className="Gallery-Component">
            {Object.values(Nodes).map((item, index) => (
                <div key={index} className="Item-Container">
                    <div className="Image-Container">
                        <span className="State-Container">
                            <span className="State-Dot" style={GetStateColor(item.State)}/>
                            {item.State}
                        </span>

                        <div 
                            className="Image-Background" 
                            style={{backgroundImage: `url(${encodeURI(item.Image)}`}}
                            onClick={() => { setCurrentModalImage(item.Image); setToggleModal(true); }}
                        />
                    </div>

                    <div className="Info-Container">
                        <div className="Text-Container">
                            <p className="Subtitle">{item.Name}</p>
                            <p className="Description">{item.Description}</p>

                            <div className="Tech-Stack">
                            {
                                item.Technologies.map((tech) => (
                                    <span key={tech} className="Tech-Container">
                                        <img src={TechImages[tech]}/>
                                        {tech}
                                    </span>
                                ))
                            }
                            </div>
                        </div>

                        <div className="Buttons-Container">
                            { 'Website' in item ? (<a href={item.Website} target="_blank"><div className="Convencional-Button">Ir a sitio</div></a>) : null }
                            { 'CodeLink' in item ? (<a href={item.CodeLink} target="_blank"><div className="Outlined-Button">Ver código</div></a>) : null }
                            { 'DownloadLink' in item ? (<a href={item.DownloadLink} target="_blank"><div className="Convencional-Button">Descargar</div></a>) : null }
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
    Nodes: PropTypes.node
}