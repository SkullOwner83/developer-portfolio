import { useState, createContext, useRef } from "react";
import Technologies from "../Data/Technologies";
import PropTypes from 'prop-types'; 

//Export the created context
export const TechContext = createContext();

//Create a component to provide the context to their childrens
export const TechProvider = ({ children }) => {
    const [currentTech, setCurrentTech] = useState();
    const techstackRef = useRef(null);

    return (
        <TechContext.Provider value={{ currentTech, setCurrentTech, Technologies , techstackRef }}>
            {children}
        </TechContext.Provider>
    );
}

//Component props validation
TechProvider.propTypes = {
    children: PropTypes.node.isRequired
};