import React from "react";
import cla from "./MyModal.module.css"

const MyModal = ({ children, visible, setVisible }) => {
    const rootClasses = [cla.myModal];

    if (visible) {
        rootClasses.push(cla.active);
    }

    return (
        <div
            className={rootClasses.join(' ')}
            onClick={() => setVisible(false)}>
            <div className={cla.myModalContent}
                onClick={(ev) => ev.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;
