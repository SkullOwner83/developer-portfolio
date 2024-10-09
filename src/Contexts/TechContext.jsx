import { useState, createContext, useRef } from "react";
import Technologies from "../Data/Technologies";
import Experience from "../Data/Experience";
import Projects from "../Data/Projects";
import PropTypes from 'prop-types'; 

//Export the created context
export const TechContext = createContext();

//Create a component to provide the context to their childrens
export const TechProvider = ({ children }) => {
    const [currentTech, setCurrentTech] = useState();
    const techstackRef = useRef(null);
    const experienceRef = useRef(null);
    const projectsRef = useRef(null);

    return (
        <TechContext.Provider value={{ currentTech, setCurrentTech, techstackRef, experienceRef, projectsRef, Technologies, Experience, Projects }}>
            {children}
        </TechContext.Provider>
    );
}

//Component props validation
TechProvider.propTypes = {
    children: PropTypes.node.isRequired
};