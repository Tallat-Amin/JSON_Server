import styles from "./gettodo.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import Todos from "./Todos/Todos";
export const URL = "http://localhost:8000/blogs";
const GetTodo = () => {
  const [newTodo, setNewTodo] = useState({});
  const [IsPending, setIsPending] = useState(true);
  const getAPI = async () => {
    try {
      const response = await axios.get(URL);
      setNewTodo(response.data);
      setIsPending(false);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    setTimeout(getAPI, 1000);
    // getAPI();
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.content}>
        {IsPending && <h3>Loading.....</h3>}
        {newTodo && <Todos newTodo={newTodo} />}
      </div>
    </div>
  );
};
export default GetTodo;
