import { useContext, useState, useRef } from "react";
import { TechContext } from "../Contexts/TechContext";
import TechImages from "../Data/Images";
import PropTypes from "prop-types";

export const Carousel = ({ Size = 96, Gap = 16}) => {
    const [animationRunning, setAnimationRunning] = useState(true);
    const { setCurrentTech, Technologies } = useContext(TechContext);
    const sndEnterRef = useRef(new Audio("/Sounds/Enter.wav"));

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

            <div className={`Items-Container ${!animationRunning ? "Animation-Stopped" : ""}`}>
                {Object.values(Technologies).map((item, index) => (
                    item.Section === "Main" && (
                        <div key={index} className="Carousel-Item" style={Styles}>
                            <img
                                src={TechImages[item.Name]}
                                className="Icon-Item"
                                alt={item.Name}
                                onClick={() => { 
                                    sndEnterRef.curreent.play();
                                    setCurrentTech(item)
                                }}
                            />
                        </div>
                    )
                ))}
            </div>

            <div className={`Items-Container ${!animationRunning ? "Animation-Stopped" : ""}`}>
                {Object.values(Technologies).map((item, index) => (
                    item.Section === "Main" && (
                        <div key={index} className="Carousel-Item" style={Styles}>
                            <img
                                src={TechImages[item.Name]}
                                className="Icon-Item"
                                alt={item.Name}
                                onClick={() => {
                                    sndEnterRef.play(); 
                                    setCurrentTech(item)
                                }}
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