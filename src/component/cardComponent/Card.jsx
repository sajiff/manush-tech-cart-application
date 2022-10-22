import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Card.css";
export const Card = () => {
  return (
    <div className="card-container">
      <div className="card-image-container">
        <img
          className="card-image"
          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          alt=""
        />
      </div>
      <span className="card-title">
        Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptopsa das asda sdas das
      </span>
      <h2 className="card-price">
        <span className="taka">৳</span>254
      </h2>
      <div className="card-button-section">
        {/* <button
          onClick={() => console.log("add to cart")}
          className="add-to-cart-btn"
        >
          <h1>ADD TO CART</h1>
        </button> */}
        <button
          onClick={() => console.log("decrease")}
          className="increase-decrease-btn"
        >
          <FontAwesomeIcon
            className="increase-decrease-icon"
            size="xl"
            color="white"
            icon={faMinus}
          />
        </button>
        <h1>5</h1>
        <button
          onClick={() => console.log("increase")}
          className="increase-decrease-btn"
        >
          <FontAwesomeIcon
            className="increase-decrease-icon"
            size="xl"
            color="white"
            icon={faPlus}
          />
        </button>
      </div>
    </div>
  );
};
