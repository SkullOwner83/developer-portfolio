import PropTypes from "prop-types"

export const Timeline = ({ Nodes }) => {
    return (
        <div className="Timeline-Componet">
            {Object.values(Nodes).map((work, index, array) => (
                <div key={index} className="Timeline-Node">
                    <span className="Timeline-Line">
                        <span className="Node-Circle">
                            <span className="Circle-Node" style={{ 
                                '--color': work.Color,
                                backgroundColor: work.Color,
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
                            <img src={work.Icon}/>
                            <p className="Title">{work.Title}</p>
                        </div>
                        
                        <div className="Body-Container">
                            <p className="Date">{work.Date}</p>
                            <ul>
                                {work.Description.map((item) => (
                                    <li key={item} className="Bullet-List">{item}</li>
                                ))}
                            </ul>
                            <p>Tecnologías utilizadas: {work.Technologies.join(" | ")}</p>
                            
                        </div>
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