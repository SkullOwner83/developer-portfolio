import { useState } from "react";

//Custom hook to save a state in the local storage
export function useLocalStorage(Key, InitialValue) {    
    const [StoredValue, SetStoredValue] = useState(() => {
        //Function to get the initial value of state from local storage or set it if not
        try {
            const Item = window.localStorage.getItem(Key);
            return Item ? JSON.parse(Item) : InitialValue;
        }
        catch (Error) {
            return InitialValue;
        }
    });

    //Function to update the state and save the value in local storage as JSON
    const SetValue = (Value) => {
        try {
            SetStoredValue(Value);
            window.localStorage.setItem(Key, JSON.stringify(Value));
        }
        catch(Error) {
            console.error(Error);
        }
    }
    
    return [StoredValue, SetValue];
}

//Scroll to component indicated
export function ScrollToComponent(Ref) {
    Ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
}

//Play sound or restart time if is playing to play it again
export const PlaySound = ( sound ) => {
    if (sound.currentTime > 0) {
        sound.play();
      } else {
        sound.currentTime = 0;
      }
};