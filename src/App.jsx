import styles from "./App.module.scss";
import GetContact from "./Components/GetContact/GetContact";
import Header from "./Components/Header/Header";
import { Routes, Route } from "react-router-dom";
import About from "./Components/About/About";

const App = () => {
  return (
    <>
      {/*<div>*/}
      {/*  <nav>*/}
      {/*    <ul>*/}
      {/*      <li>*/}
      {/*        <Link to={"/About"}>About </Link>*/}
      {/*      </li>*/}
      {/*    </ul>*/}
      {/*  </nav>*/}
      {/*</div>*/}
      <div className={styles.main}>
        <Header />
        <br />
        {/* routing starts --> */}
        <Routes>
          <Route path="/" element={<GetContact />} />
          <Route path="/About" element={<About />} />
          {/*<Route path={"/books"}></Route>*/}
        </Routes>
        {/* <-- routing end */}
      </div>
    </>
  );
};

export default App;
