import styles from "./header.module.scss";
import AddForm from "../AddForm/AddForm";
const Header = () => {
  return (
    <div className={styles.main}>
      <div className={styles.title}>
        <h2>JSON Server</h2>
      </div>
      <div className={styles.search}>
        {/*<input*/}
        {/*  type="text"*/}
        {/*  className={styles.input}*/}
        {/*  // onChange={handleSearch}*/}
        {/*  placeholder={"Enter todo...."}*/}
        {/*/>*/}
        <div className={styles.add_button}>
          <AddForm />
        </div>
      </div>
    </div>
  );
};
export default Header;
