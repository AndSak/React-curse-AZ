import React from "react";
import cla from "./MyModal.module.css"

const MyModal = ({children}) => {

    return (
        <div className={[cla.myModal, cla.active].join(' ')}>
            <div className={cla.myModalContent}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;
