import { createContext, useState, useRef } from "react";
import PropTypes from "prop-types";

export const AudioContext = createContext()

export const AudioProvider = ({ children }) => {
    const [webVolume, setWebVolume] = useState(1);
    
    const sounds = useRef({
        Menu: new Audio("/Sounds/Menu.wav"),
        Open: new Audio("/Sounds/Open.wav"),
        Enter: new Audio("/Sounds/Enter.wav"),
        Start: new Audio("/Sounds/Start.wav"),
        Select: new Audio("/Sounds/Select.wav")
    });

    function playsound(sound) {
        sound = sounds.current[sound];
        
        if (sound) {
            sound.volume = webVolume;
            sound.currentTime = 0;
            sound.play();
        }
    }

    return (
        <AudioContext.Provider value={{webVolume, setWebVolume, playsound}}>
            {children}
        </AudioContext.Provider>
    )
}

AudioProvider.propTypes = {
    children: PropTypes.node.isRequired
};