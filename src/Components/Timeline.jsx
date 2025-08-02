import PropTypes from "prop-types"

export const Timeline = ({ Nodes }) => {
    return (
        <div className="Timeline-Component"> 
        {Object.values(Nodes).map((work, index) => (
                <div key={index} className="Timeline-Node">
                    <span className="Timeline-Line">
                        <span className="Node-Circle">
                            <span className="Circle-Node" style={{ 
                                '--color': work.Color,
                                backgroundColor: work.Color,
                                animation: `Flicker ${Object.values(Nodes).length}s infinite`,
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
                            <ul>
                                {work.Description.map((item, index) => (
                                    <li key={index} className="Bullet-List">{item}</li>
                                ))}
                            </ul>
                            <p>Tecnologías utilizadas: {work.Technologies.join(" | ")}</p>
                            <p className="Date">{work.Date}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

//Component props validation
Timeline.propTypes = {
    Nodes: PropTypes.objectOf(
        PropTypes.shape({
            Title: PropTypes.string.isRequired,
            Description: PropTypes.arrayOf(PropTypes.string).isRequired,
            Date: PropTypes.string.isRequired,
            Icon: PropTypes.string,
            Technologies: PropTypes.arrayOf(PropTypes.string),
            Color: PropTypes.string
        })
    ).isRequired
}