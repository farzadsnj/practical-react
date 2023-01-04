import React, {useState} from 'react'
import Modal from 'react-modal'

Modal.setAppElement('#root')

export const ModalComp = () => {
    const [modal, setModal] = useState(false)
  return (
    <div>
        <button onClick={() => setModal(true)}>open modal</button>
        <Modal isOpen={modal} 
        shouldCloseOnOverlayClick={false} 
        onRequestClose={() => setModal(false)}
        style={
            {
                overlay: {
                    backgroundColor: 'grey'
                },
    
                content:{
                    color: 'blue'
                }
            }
        }>
            <h2>Modal title</h2>
            <p>Modal body</p>
            <div>
                <button onClick={() => setModal(false)}>close modal</button>
            </div>
        </Modal>
    </div>
  )
}
