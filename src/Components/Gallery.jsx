import PropTypes from "prop-types";

export const Gallery = ({ Nodes }) => {
    return (
        <div className="Gallery-Component">
            {Object.values(Nodes).map((item, index) => (
                <div key={index} className="Item-Container">
                    <div className="Image-Container" style={{backgroundImage: `${item.Image}`}}/>

                    <div className="Info-Container">
                        <div className="Text-Container">
                            <p className="Subtitle">{item.Name}</p>
                            <p>{item.Description}</p>
                            <p>Tecnologías: {item.Technologies}</p>
                        </div>

                        <div className="Buttons-Container">
                            { 'Website' in item ? (<a href={item.Website} target="_blank"><div className="Convencional-Button">Ir a sitio</div></a>) : null }
                            { 'CodeLink' in item ? (<a href={item.CodeLink} target="_blank"><div className="Outlined-Button">Ver código</div></a>) : null }
                            { 'DownloadLink' in item ? (<a href={item.DownloadLink} target="_blank"><div className="Convencional-Button">Descargar</div></a>) : null }
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

Gallery.propTypes = {
    Nodes: PropTypes.node
}