const Modal = ({ text, status, activeModal, setActiveModal, onClick }) => {
    if(!status) {
        return null
    }

    return (
         <div className={activeModal ? 'modal-active' : 'modal-close'}
            onClick={() => {
                setActiveModal(!status)
                onClick()
            }}
        >
            <div className="modal_content">
                {text}
            </div>
        </div>
    );
}

export default Modal;