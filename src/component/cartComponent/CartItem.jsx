import {
  faXmark,
  faEquals,
  faCaretUp,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import {
  addToCart,
  decreaseCartQuantity,
  removeFromCart,
} from "../../redux/features/cartSlice";

export const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch();

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(cartItem));
  };

  const handleDecreaseCartQuantity = () => {
    dispatch(decreaseCartQuantity(cartItem));
  };

  const handleIncreaseCartQuantity = () => {
    dispatch(addToCart(cartItem));
  };

  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <div
          onClick={() => handleRemoveFromCart()}
          className="cart-item-remove"
        >
          <FontAwesomeIcon size="xl" icon={faXmark} />
        </div>
        <img className="cart-image" src={cartItem.image} alt="" />
      </div>
      <div className="cart-item-details">
        <span className="cart-item-title">{cartItem.title}</span>
        <div className="cart-price-details">
          <div className="cart-pricing">
            <h2>
              <span className="taka">৳</span>
              {cartItem.price}
            </h2>
            <FontAwesomeIcon size="xl" icon={faXmark} />

            <div className="cart-item-quantity">
              <span>{cartItem.itemQuantity}</span>
              <div style={{ width: "min-content" }}>
                <FontAwesomeIcon
                  style={{ cursor: "pointer" }}
                  onClick={() => handleIncreaseCartQuantity()}
                  size="lg"
                  icon={faCaretUp}
                />
                <FontAwesomeIcon
                  style={{ cursor: "pointer" }}
                  onClick={() => handleDecreaseCartQuantity()}
                  size="lg"
                  icon={faCaretDown}
                />
              </div>
            </div>
          </div>
          <FontAwesomeIcon size="xl" icon={faEquals} />
          <h2>
            <span className="taka">৳</span>
            {(cartItem.price * cartItem.itemQuantity).toFixed(2)}
          </h2>
        </div>
      </div>
    </div>
  );
};
