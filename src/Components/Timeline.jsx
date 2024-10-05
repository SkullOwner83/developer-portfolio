import PropTypes from "prop-types"

export const Timeline = ({ Nodes }) => {
    return (
        <div className="Timeline-Componet">
            {Object.values(Nodes).map((item, index) => (
                <div key={index} className="Timeline-Node">
                    <div className="Timeline-Line">
                        <div className="Node-Dot"/>

                        {index !== Object.values(Nodes).length - 1 ? (
                            <div className="Node-line"/>
                        ) : null}
                    </div>

                    <div className="Info-Container">
                        <div className="Grid-Wrap">
                            <p className="Title">{item.Title}</p>
                            <p className="Date">{item.Date}</p>
                        </div>
                        <p>{item.Description}</p>
                        <p>Tecnologías usadadas: {item.Technologies}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}


Timeline.propTypes = {
    Nodes: PropTypes.node.isRequired
}