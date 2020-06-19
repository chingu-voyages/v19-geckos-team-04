import React, { createContext, useState } from 'react';

export const ModalContext = createContext();

const ModalContextProvider = (props) => {

    const [ modal, setModal ] = useState([
        { isModalOpen: false },
    ])

    const onOpenModal = () => {
        setModal({ isModalOpen: !modal.isModalOpen });
      }
    
    // const onCloseModal = () => {
    //     setModal({ isModalOpen: false });
    // }

    return (
        <ModalContext.Provider value={ onOpenModal }>
            { props.children }
        </ModalContext.Provider>
    )
}

export default ModalContextProvider;