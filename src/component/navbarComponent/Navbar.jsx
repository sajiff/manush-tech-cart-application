import "./Navbar.css";
import logo from "../../../src/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export const Navbar = ({ cartToggle, openCart }) => {
  return (
    <>
      <nav className="navbar-container">
        <div className="navbar-logo-container">
          <img className="navbar-logo" src={logo} alt="" />
        </div>
        <div onClick={openCart} className="navbar-cart-container">
          <FontAwesomeIcon size="xl" icon={faCartShopping} />
          <div className="navbar-cart-counter-container">
            <span className="navbar-cart-counter-text">2</span>
          </div>
        </div>
      </nav>
    </>
  );
};
