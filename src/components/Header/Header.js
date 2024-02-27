// Header.js

import React from "react";
import styles from "./Header.module.scss"; // Import the SCSS file

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.searchBar}>
          <input
            className={styles.searchInput}
            type="text"
            placeholder= "                  Search..." 
          />
        </div>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <a href="#">Categories</a> 
            </li>
            <li className={styles.navItem}>
              <a href="#">Website Builders</a>
            </li>
            <li className={styles.navItem}>
              <a href="#">Today's Deal</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
