import { createContext } from "react";
import PropTypes from "prop-types";

export const VolumeContext = createContext()

export const VolumeProvider = ({ children }) => {
    const [webVolume, setWebVolume] = useState(1)

    return (
        <VolumeContext.Provider value={{webVolume, setWebVolume}}>
            {children}
        </VolumeContext.Provider>
    )
}

VolumeProvider.propTypes = {
    children: PropTypes.node.isRequired
};