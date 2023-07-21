import { Link } from "react-router-dom";

const BookList = () => {
  return (
    <>
      <h3>BookList</h3>
      <Link to={"/book/1"}>Book 1</Link>
      <Link to={"/book/2"}>Book 2</Link>
    </>
  );
};
export default BookList;
