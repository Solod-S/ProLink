import Modal from "react-modal";

if (process.env.NODE_ENV === "production") {
  Modal.setAppElement("#root");
}

const customStyles = {
  content: {
    padding: 40,
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function ModalWindow({ isOpen, onClose, component }) {
  return (
    <Modal
      ariaHideApp={false}
      isOpen={isOpen}
      //   onAfterOpen={afterOpenModal}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Example Modal"
    >
      {component}
    </Modal>
  );
}

export default ModalWindow;
