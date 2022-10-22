import { faXmark, faEquals } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CartItem } from "./CartItem";
import "./CartModal.css";

const Totals = ({ title, value }) => (
  <div className="cart-totals">
    <h2>{title}</h2>
    <FontAwesomeIcon size="xl" icon={faEquals} />
    <h2>
      <span className="taka">৳</span>
      {value}
    </h2>
  </div>
);
export const CartModal = ({ open, closeModal, checkoutModal }) => {
  if (!open) return null;
  return (
    <div className="cart-modal-container">
      <div className="cart-container">
        <div className="cart-header">
          <h1>Cart</h1>
          <button onClick={closeModal} className="btn">
            <FontAwesomeIcon size="3x" icon={faXmark} />
          </button>
        </div>
        <h2>Your Items</h2>
        <hr />
        <CartItem />
        <CartItem />

        <hr />
        <Totals title={"Sub-total"} value={25400} />
        <Totals title={"Delivery Charge"} value={100} />
        <hr />
        <Totals title={"Grand-total"} value={25400} />
        <div className="checkout-container">
          <button
            onClick={() => {
              closeModal();
              checkoutModal();
            }}
            className="btn checkout-btn"
          >
            <h3>Proceed to checkout</h3>
          </button>
        </div>
      </div>
    </div>
  );
};
