import { faXmark, faEquals } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getTotals } from "../../redux/cartSlice";
import { CartItem } from "./CartItem";
import "./CartModal.css";

const DELIVERY_CHARGE = 100;

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
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart]);

  const handleCheckout = () => {
    closeModal();
    checkoutModal();
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };
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
        {cart.cartItems.length === 0 ? (
          <h2>No items selected</h2>
        ) : (
          <>
            <h2>Your Items</h2>
            <hr />
            {cart.cartItems?.map((cartItem) => (
              <CartItem key={cartItem.id} cartItem={cartItem} />
            ))}

            <hr />
            <Totals title={"Sub-total"} value={cart.cartTotalAmount} />
            <Totals title={"Delivery Charge"} value={DELIVERY_CHARGE} />
            <hr />
            <Totals
              title={"Grand-total"}
              value={cart.cartTotalAmount + DELIVERY_CHARGE}
            />
            <div className="checkout-container">
              <button
                onClick={() => handleCheckout()}
                className="btn checkout-btn"
              >
                <h3>Proceed to checkout</h3>
              </button>
            </div>
            <div className="checkout-container">
              <button
                onClick={() => {
                  handleClearCart();
                }}
                className="btn checkout-btn"
              >
                <h3>Clear cart</h3>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
