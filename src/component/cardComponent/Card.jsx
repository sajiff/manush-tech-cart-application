import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Card.css";
export const Card = ({ product }) => {
  return (
    <div className="card-container">
      <div className="card-image-container">
        <img className="card-image" src={product.image} alt="" />
      </div>
      <span className="card-title">{product.title}</span>
      <h2 className="card-price">
        <span className="taka">৳</span>
        {product.price}
      </h2>
      <div className="card-button-section">
        <button
          onClick={() => console.log("add to cart")}
          className="add-to-cart-btn"
        >
          <h1>ADD TO CART</h1>
        </button>
        {/* <button
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
        </button> */}
      </div>
    </div>
  );
};
