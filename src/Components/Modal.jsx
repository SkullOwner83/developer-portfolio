import { useEffect, useState } from 'react';
import ImgClose from '../Assets/Icons/Close.svg';
import PropTypes from "prop-types"

export const Modal = ({ Image, className, isVisible, onToggleVisibility }) => {
    const [isActive, setIsActive] = useState(true);

    //Block the scroll of the page if the modal is visible
    useEffect(() => {
        if (isActive) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isActive]);

    //Synchronizes internal state with the isVisible prop if it changes
    useEffect(() => {
        if (isVisible !== undefined) {
            setIsActive(isVisible)
        }
    }, [isVisible])

    //Toggles the visibility of the modal and notifies the parent if an onToggleVisibility is defined
    const toggleVisibility = () => {
        setIsActive(!isActive);

        if (onToggleVisibility) {
            onToggleVisibility(!isActive);
        }
    };

    return (
        <div className={isVisible ? `Modal-Component Visible ${className}` : `Modal-Component ${className}`}>
            <div className="Modal-Overlay" onClick={toggleVisibility}/>
            <div className="Modal-Content" style={{backgroundImage: `url(${encodeURI(Image)})`}}>
                <button onClick={toggleVisibility}><img src={ImgClose}/></button>
            </div>
        </div>
    )
}

Modal.propTypes = {
    Image: PropTypes.Image,
    className: PropTypes.string,
    isVisible: PropTypes.bool,
    onToggleVisibility: PropTypes.func
}