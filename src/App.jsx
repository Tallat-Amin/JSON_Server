import styles from "./App.module.scss";
import GetContact from "./Components/GetContact/GetContact";
import Header from "./Components/Header/Header";
const App = () => {
  return (
    <div className={styles.main}>
      <Header />
      <br />
      <GetContact />
    </div>
  );
};

export default App;
