import PropTypes from "prop-types";
import { useContext } from "react";
import { TechContext } from "../Contexts/TechContext";
import TechImages from "../Data/Images";

export const TechDetails = ({ Technology }) => {
    const { Technologies } = useContext(TechContext);
    const defaultTech = Object.values(Technologies)[0];
    const technology = Technology || defaultTech;
    
    return (
        <div className="TechDetails-Component">
            <div className="Icon-Container">
                <img src={TechImages[Technology.Name]}/>
            </div>
            
            <div className="Info-Details">
                <p className="Title"> {technology.Name}</p>
                <p><strong>Tipo:</strong> {technology.Type}</p>
                <p><strong>Experiencia:</strong> {technology.Experience}</p>
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
        IconPath: PropTypes.string.isRequired,
        Experience: PropTypes.string.isRequired,
        Level: PropTypes.string.isRequired,
        Section: PropTypes.string.isRequired
    }).isRequired
};