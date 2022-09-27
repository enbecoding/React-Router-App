import React from "react";
import {Link} from "react-router-dom"
import styles from "./Main.module.css"

const Header = () => {
  return (
    <header>
      <h2>Devmountain Eatery</h2>
      <nav>
        <Link to="">
          <button className={styles.navbtn}>Home</button>
        </Link>
        <Link to="/newRecipe">
          <button className={styles.navbtn}>Add Recipe</button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
