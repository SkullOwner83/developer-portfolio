import PropTypes from "prop-types";
import { Modal } from "./Modal";
import { useState } from "react";

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
                        <div className="State-Container">
                            <div style={GetStateColor(item.State)}/>
                            <p>{item.State}</p>
                        </div>

                        <div 
                            className="Image-Background" 
                            style={{backgroundImage: `url(${encodeURI(item.Image)}`}}
                            onClick={() => { setCurrentModalImage(item.Image); setToggleModal(true); }}
                            />
                    </div>

                    <div className="Info-Container">
                        <div className="Text-Container">
                            <p className="Subtitle">{item.Name}</p>
                            <p>{item.Description}</p>
                            <p>Tecnologías: <strong>{item.Technologies}</strong></p>
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