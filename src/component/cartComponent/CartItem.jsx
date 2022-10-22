import { faXmark, faEquals } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const CartItem = () => {
  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <div className="cart-item-remove">
          <FontAwesomeIcon size="xl" icon={faXmark} />
        </div>
        <img
          className="cart-image"
          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          alt=""
        />
      </div>
      <div className="cart-item-details">
        <span className="cart-item-title">
          Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptopsa das asda sdas
          das
        </span>
        <div className="cart-price-details">
          <div className="cart-pricing">
            <h2>
              <span className="taka">৳</span>254
            </h2>
            <FontAwesomeIcon size="xl" icon={faXmark} />
            <div className="cart-item-quantity">
              <span>10</span>
            </div>
          </div>
          <FontAwesomeIcon size="xl" icon={faEquals} />
          <h2>
            <span className="taka">৳</span>25400
          </h2>
        </div>
      </div>
    </div>
  );
};
