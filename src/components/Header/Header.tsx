import React, { FC } from "react";
import "./Header.css";

interface HeaderProps {
  isSlideshowActive: boolean;
  setIsSlideshowActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: FC<HeaderProps> = ({
  isSlideshowActive,
  setIsSlideshowActive,
}) => {
  const handleClick = () => {
    setIsSlideshowActive(!isSlideshowActive);
  };

  return (
    <header>
      <img
        className="logo"
        src={"/assets/shared/logo.svg"}
        alt="Galleria icon"
      />

      <button className="link2" onClick={handleClick}>
        {!isSlideshowActive ? "Start slideshow" : "Stop slideshow"}
      </button>
    </header>
  );
};

export default Header;
