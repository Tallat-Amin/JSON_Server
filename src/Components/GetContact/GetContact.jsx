import styles from "./getcontact.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import Contacts from "./Contacts/Contacts";
export const URL = "http://localhost:8000/blogs";
const GetContact = () => {
  const [newContact, setNewContact] = useState({});
  const [IsPending, setIsPending] = useState(true);
  const getAPI = async () => {
    try {
      const response = await axios.get(URL);
      setNewContact(response.data);
      setIsPending(false);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    setTimeout(getAPI, 1000);
    // getAPI();
  });

  return (
    <div className={styles.main}>
      <div className={styles.content}>
        {IsPending && <h3>Loading.....</h3>}
        {newContact && <Contacts newContact={newContact} />}
      </div>
    </div>
  );
};
export default GetContact;
