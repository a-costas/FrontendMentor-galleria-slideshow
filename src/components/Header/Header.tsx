import "./Header.css";
import logo from "../../assets/shared/logo.svg";

const Header = () => {
  return (
    <header>
      <img className="logo" src={logo} alt="Galleria icon" />
      <button className="link2">Start slideshow</button>
    </header>
  );
};

export default Header;
