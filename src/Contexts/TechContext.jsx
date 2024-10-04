import { useState, createContext } from "react";
import Technologies from "../Data/Technologies";

export const TechContext = createContext();

export const TechProvider = ({ children }) => {
    const [currentTech, setCurrentTech] = useState(Technologies.CSharp);

    return (
        <TechContext.Provider value={{ currentTech, setCurrentTech, Technologies }}>
            {children}
        </TechContext.Provider>
    );
}