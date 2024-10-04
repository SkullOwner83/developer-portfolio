import { useContext } from "react";
import { TechContext } from "../Contexts/TechContext";

export const Carousel = ({ Size, Gap }) => {
    const Styles = {
        width: `${Size + Gap}px`,
        height: `${Size + Gap}px`,
        padding: `${Gap / 2}px`
    };

    const { setCurrentTech, Technologies } = useContext(TechContext);

    return (
        <div className="Carousel-Component">
            <div className="Items-Container">
                {Object.values(Technologies).map((item, index) => (
                    item.Section == "Main" ? (
                        <div key="Index" className="Carousel-Item" style={Styles}>
                            <img 
                                key={index} 
                                src={item.IconPath}
                                onClick={() => setCurrentTech(item)}
                            />
                        </div>
                    )
                    : null
                ))}
            </div>

            <div className="Items-Container">
                {Object.values(Technologies).map((item, index) => (
                    item.Section == "Main" ? (
                        <div key="Index" className="Carousel-Item" style={Styles}>
                            <img 
                                key={index} 
                                src={item.IconPath}
                                onClick={() => setCurrentTech(item)}
                            />
                        </div>
                    )
                    : null
                ))}
            </div>
        </div>
    )
}