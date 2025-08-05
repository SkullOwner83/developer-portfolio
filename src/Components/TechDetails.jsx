import PropTypes from "prop-types";
import { useContext } from "react";
import { TechContext } from "../Contexts/TechContext";
import TechImages from "../Data/Images";
import { useEffect, useRef } from "react";

export const TechDetails = ({ Technology, on_previous, on_next }) => {
    const { Technologies } = useContext(TechContext);
    const defaultTech = Object.values(Technologies)[0];
    const technology = Technology || defaultTech;

    const mainContainerRef = useRef(null);
    const buttonsOverlayRef = useRef(null);
    const SndSelectRef = useRef(new Audio("/Sounds/Select.wav"));

    // Maintain the navigation buttons at the same heigh as the icon container to preserve the design when the control wraps
    useEffect(() => {
        function adjustHeight() {
            const containerStyle = window.getComputedStyle(mainContainerRef.current);
            const padding = parseFloat(containerStyle.paddingTop) + parseFloat(containerStyle.paddingBottom);
            const icon = document.getElementsByClassName("Icon-Container")[0];
            buttonsOverlayRef.current.style.height = `${icon.offsetHeight + padding}px`
        }

        adjustHeight();
        const resizeObserver = new ResizeObserver(adjustHeight);

        if (buttonsOverlayRef.current) {
            resizeObserver.observe(mainContainerRef.current)
        }

        return () => {
            resizeObserver.disconnect();
        }
    }, [])
    
    return (
        <div className="TechDetails-Component" ref={mainContainerRef}>
            <div className="Buttons-Overlay" ref={buttonsOverlayRef}>
                <button onClick={()=> { SndSelectRef.play(); on_previous(); }}><img src="/Icons/Arrow.svg" draggable="false"/></button>
                <button onClick={() => { SndSelectRef.play(); on_next(); }} style={{transform: "rotate(180deg)"}}><img src="/Icons/Arrow.svg" draggable="false"/></button>
            </div>

            <div className="Icon-Container">
                <img src={TechImages[technology.Name]}/>
            </div>
            
            <div className="Info-Details">
                <p className="Title"> {technology.Name}</p>
                <p><strong>Tipo:</strong> {technology.Type}</p>
                <p><strong>Experiencia:</strong> {technology.Experience}</p>
                <p><strong>Frecuenia de uso:</strong> {technology.Frequency} </p>
                <p><strong>Nivel:</strong> {technology.Level}</p>
            </div>
        </div>
    );
}

//Component props validation
TechDetails.propTypes = {
    Technology: PropTypes.shape({
        Name: PropTypes.string.isRequired,
        Type: PropTypes.string.isRequired,
        Experience: PropTypes.string.isRequired,
        Level: PropTypes.string.isRequired,
        Section: PropTypes.string.isRequired
    }).isRequired,
    on_previous: PropTypes.func,
    on_next: PropTypes.func
};