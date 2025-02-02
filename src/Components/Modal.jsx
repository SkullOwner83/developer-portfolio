import { useEffect, useState } from 'react';
import PropTypes from "prop-types"

export const Modal = ({ children, className, isVisible, onToggleVisibility }) => {
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
            <div className="Modal-Content">
                {children}
                <button onClick={toggleVisibility}><img src="/Icons/Close.svg"/></button>
            </div>
        </div>
    )
}

Modal.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    isVisible: PropTypes.bool,
    onToggleVisibility: PropTypes.func
}