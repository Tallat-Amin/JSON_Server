import styles from "./addform.module.scss";
import { useRef, useState } from "react";
import axios from "axios";
const AddForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const form = useRef();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // const data = new FormData(form.current);
      const temp_obj = { name, email };
      await axios.post(URL, temp_obj);
      setName("");
      setEmail("");
      console.log("new contact added!");
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <div className={styles.main}>
      <form onSubmit={handleSubmit} ref={form}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          required={true}
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder={"Enter your full name...."}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          required={true}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder={"Enter your email address...."}
        />
        <input type="submit" />
      </form>
    </div>
  );
};
export default AddForm;
