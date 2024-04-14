const Modal = ({ text, status, activeModal, setActiveModal,setState, randomRightWord }) => {
    return (
        status && <div className={activeModal ? 'modal-active' : 'modal-close'}
            onClick={() => {
                setActiveModal(!status)
                setState({
                    rightWord: randomRightWord(),
                    words: [],
                    inputWord: '',
                })
            }}
        >
            <div className="modal_content">
                {text}
            </div>
        </div>
    );
}

export default Modal;