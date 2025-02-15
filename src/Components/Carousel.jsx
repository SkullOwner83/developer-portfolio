import { useContext, useState } from "react";
import { TechContext } from "../Contexts/TechContext";
import TechImages from "../Data/Images";
import PropTypes from "prop-types";

export const Carousel = ({ Size, Gap }) => {
    const [animationRunning, setAnimationRunning] = useState(true);
    const { setCurrentTech, Technologies } = useContext(TechContext);

    const Styles = {
        width: `${Size + Gap}px`,
        height: `${Size + Gap}px`,
        padding: `${Gap / 2}px`,
    };

    return (
        <div className="Carousel-Component"
            onMouseEnter={() => setAnimationRunning(false)}
            onMouseLeave={() => setAnimationRunning(true)}>
            {/* Print only Main technologies from the list */}
            <div className={animationRunning ? "Items-Container" : "Items-Container Animation-Stopped"}>
                {Object.values(Technologies).map((item, index) => (
                    item.Section == "Main" ? (
                        <div key="Index" className="Carousel-Item" style={Styles}>
                            <img key={index}
                                src={TechImages[item.Name]}
                                onClick={() => setCurrentTech(item)}
                            />
                        </div>
                    )
                        : null
                ))}
            </div>

            <div className={animationRunning ? "Items-Container" : "Items-Container Animation-Stopped"}>
                {Object.values(Technologies).map((item, index) => (
                    item.Section == "Main" ? (
                        <div key="Index" className="Carousel-Item" style={Styles}>
                            <img
                                key={index}
                                src={TechImages[item.Name]}
                                onClick={() => setCurrentTech(item)}
                            />
                        </div>
                    )
                        : null
                ))}
            </div>
        </div>
    )
}

//Component set default values
Carousel.defaultProps = {
    Size: 96,
    gap: 16
}

//Component props validation
Carousel.propTypes = {
    Size: PropTypes.number,
    Gap: PropTypes.number
};