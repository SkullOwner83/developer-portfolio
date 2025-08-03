import { useContext, useState } from "react";
import { TechContext } from "../Contexts/TechContext";
import TechImages from "../Data/Images";
import PropTypes from "prop-types";

export const Carousel = ({ Size = 96, Gap = 16}) => {
    const [animationRunning, setAnimationRunning] = useState(true);
    const { setCurrentTech, Technologies } = useContext(TechContext);

    const Styles = {
        width: `${Size + Gap}px`,
        height: `${Size + Gap}px`,
        padding: `${Gap / 2}px`,
    };

    return (
        <div 
            className="Carousel-Component"
            onMouseEnter={() => setAnimationRunning(false)}
            onMouseLeave={() => setAnimationRunning(true)}>

            <div className={animationRunning ? "Items-Container" : "Items-Container Animation-Stopped"}>
                {Object.values(Technologies).map((item, index) => (
                    item.Section === "Main" && (
                        <div key={index} className="Carousel-Item" style={Styles}>
                            <img
                                src={TechImages[item.Name]}
                                onClick={() => setCurrentTech(item)}
                                className="Icon-Item"
                                alt={item.Name}
                            />
                        </div>
                    )
                ))}
            </div>

            <div className={animationRunning ? "Items-Container" : "Items-Container Animation-Stopped"}>
                {Object.values(Technologies).map((item, index) => (
                    item.Section === "Main" && (
                        <div key={index} className="Carousel-Item" style={Styles}>
                            <img
                                src={TechImages[item.Name]}
                                onClick={() => setCurrentTech(item)}
                                className="Icon-Item"
                                alt={item.Name}
                            />
                        </div>
                    )
                ))}
            </div>
        </div>
    )
}

Carousel.propTypes = {
    Size: PropTypes.number,
    Gap: PropTypes.number
};