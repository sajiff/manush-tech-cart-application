import "./Navbar.css";
import logo from "../../../src/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

export const Navbar = ({ cartToggle, openCart }) => {
  const cart = useSelector((state) => state.cart);

  return (
    <>
      <nav className="navbar-container">
        <div className="navbar-logo-container">
          <img className="navbar-logo" src={logo} alt="" />
        </div>
        <div onClick={openCart} className="navbar-cart-container">
          <FontAwesomeIcon size="xl" icon={faCartShopping} />
          <div className="navbar-cart-counter-container">
            <span className="navbar-cart-counter-text">
              {cart.cartTotalQuantity}
            </span>
          </div>
        </div>
      </nav>
    </>
  );
};
