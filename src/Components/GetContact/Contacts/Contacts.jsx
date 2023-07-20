import styles from "./contacts.module.scss";
import { URL } from "../GetContact";
import axios from "axios";
import UpdateModal from "../../UpdateModal/UpdateModal";
import { useState } from "react";
const Contacts = ({ newContact }) => {
  // const [update]
  const handlerDelete = async (id) => {
    try {
      await axios.delete(`${URL}/${id}`);
      console.log(`Contact deleted at ${id}`);
    } catch (e) {
      console.log(e.message);
    }
  };
  const [modalIsOpen, setIsOpen] = useState(false);

  // State to store the ID of the currently edited contact
  const [editedContactId, setEditedContactId] = useState(null);
  const [editedName, setEditedName] = useState("");
  const [editedEmail, setEditedEmail] = useState("");

  // Function to open the modal and set the ID of the currently edited contact
  const openModal = (id, name, email) => {
    setEditedContactId(id);
    setEditedName(name);
    setEditedEmail(email);
    setIsOpen(true);
  };

  // Function to close the modal and reset the editedContactId
  const closeModal = () => {
    setEditedContactId(null);
    setIsOpen(false);
  };

  return (
    <div className={styles.todos}>
      {newContact.length >= 1 ? (
        newContact.map((todos) => {
          const { id, name, email } = todos;
          // setUpdatedName(name);
          return (
            <div key={id}>
              <div className={styles.content}>
                <h3>{name}</h3>
                <p>{email}</p>
              </div>
              <div className={styles.buttons}>
                <div className={styles.modal}>
                  <button onClick={() => openModal(id, name, email)}>✏️</button>
                  {/*<button onClick={()=>openModal}></button>*/}
                </div>
                <button onClick={() => handlerDelete(id)}>🗑</button>
              </div>
            </div>
          );
        })
      ) : (
        <></>
      )}
      {modalIsOpen && (
        <UpdateModal
          id={editedContactId}
          name={editedName}
          email={editedEmail}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};
export default Contacts;
