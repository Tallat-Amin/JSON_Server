import styles from "./App.module.scss";
import GetTodo from "./Components/Todo/GetTodo";
import Header from "./Components/Header/Header";
const App = () => {
  return (
    <div className={styles.main}>
      <Header />
      <br />
      <GetTodo />
    </div>
  );
};

export default App;
