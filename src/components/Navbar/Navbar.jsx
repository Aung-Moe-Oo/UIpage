import React from "react";
import css from "./Navbar.module.css";
import { IoExtensionPuzzle } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className={css.container}>
      <div className={css.logo}>
        <IoExtensionPuzzle />
      </div>
      <div className={css.menu}>
        <ul className={css.links}>
          <li>Home</li>
          <li>About Us</li>
          <li>Blog</li>
          <li>How It Works?</li>
        </ul>
        <div className={css.buttons}>
          <button>Log in</button>
          <button>Sign up</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
