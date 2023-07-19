import styles from "./header.module.scss";
import Modal from "react-modal";
import { useState } from "react";
import AddForm from "../AddForm/AddForm";
const Header = () => {
  let subtitle;
  const [IsModalOpen, setIsModalOpen] = useState(false);
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  const openModal = () => {
    setIsModalOpen(true);
  };

  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className={styles.main}>
      <div className={styles.title}>
        <h2>JSON Server</h2>
      </div>
      <div className={styles.search}>
        <input
          type="text"
          className={styles.input}
          // onChange={handleSearch}
          placeholder={"Enter todo...."}
        />
        <div className={styles.add_button}>
          <AddForm />
        </div>
      </div>
    </div>
  );
};
export default Header;
