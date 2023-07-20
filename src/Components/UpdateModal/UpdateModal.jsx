import { useState } from "react";
import Modal from "react-modal";
import { URL } from "../GetContact/GetContact";
import axios from "axios";

const UpdateModal = ({ id, name, email, closeModal }) => {
  const [updatedName, setUpdatedName] = useState(name);
  const [updatedEmail, setUpdatedEmail] = useState(email);
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      width: "80%",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      boxShadow: "1px 2px #888888",
    },
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const temp_obj = { name: updatedName, email: updatedEmail };
      console.log(id);
      await axios.put(`${URL}/${id}`, temp_obj);
      console.log("New contact added!");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <Modal
      isOpen={true}
      onRequestClose={closeModal}
      style={customStyles}
      ariaHideApp={false}
      contentLabel="Example Modal"
    >
      <div>
        <button onClick={closeModal}>X</button>
        <h2>Edit Contact</h2>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              required={true}
              value={updatedName}
              onChange={(e) => {
                setUpdatedName(e.target.value);
              }}
              placeholder={"Enter your full name...."}
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              required={true}
              value={updatedEmail}
              onChange={(e) => {
                setUpdatedEmail(e.target.value);
              }}
              placeholder={"Enter your email address...."}
            />
            <input type="submit" />
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default UpdateModal;
