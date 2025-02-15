import PropTypes from "prop-types"

export const Timeline = ({ Nodes }) => {
    return (
        <div className="Timeline-Componet">
            {Object.values(Nodes).map((item, index, array) => (
                <div key={index} className="Timeline-Node">
                    <span className="Timeline-Line">
                        <span className="Node-Circle">
                            <span className="Circle-Node" style={{ 
                                '--color': item.Color,
                                backgroundColor: item.Color,
                                animation: `Flicker ${array.length}s infinite`,
                                animationDelay: `${1 * index}s`
                            }}/>
                        </span>

                        {index !== Object.values(Nodes).length - 1 ? (
                            <span className="Node-line"/>
                        ) : null}
                    </span>

                    <div className="Info-Container">
                        <div className="Header-Container">
                            <img src={item.Icon}/>
                            <p className="Title">{item.Title}</p>
                            
                        </div>
                        
                        <p>{item.Description}</p>
                        <p>Tecnologías usadadas: <strong>{item.Technologies}</strong></p>
                        <p className="Date">{item.Date}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

//Component props validation
Timeline.propTypes = {
    Nodes: PropTypes.node.isRequired
}