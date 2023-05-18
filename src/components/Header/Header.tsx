import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <img
        className="logo"
        src={"/assets/shared/logo.svg"}
        alt="Galleria icon"
      />
      <button className="link2">Start slideshow</button>
    </header>
  );
};

export default Header;
