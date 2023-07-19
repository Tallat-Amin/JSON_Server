import styles from "./todos.module.scss";
const Todos = ({ newTodo }) => {
  return (
    <div className={styles.todos}>
      {newTodo.length >= 1 ? (
        newTodo.map((todos) => {
          const { id, name, email } = todos;
          return (
            <div key={id}>
              <h3>{name}</h3>
              <p>{email}</p>
            </div>
          );
        })
      ) : (
        <></>
      )}
    </div>
  );
};
export default Todos;
