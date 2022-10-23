import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import "./Card.css";

export const Card = ({ product }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };
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
        {cart.cartItems.find((item) => item.id === product.id) ? (
          <>
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
            <h1>
              {
                cart.cartItems.find((item) => item.id === product.id)
                  .itemQuantity
              }
            </h1>
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
          </>
        ) : (
          <button onClick={() => handleAddToCart()} className="add-to-cart-btn">
            <h1>ADD TO CART</h1>
          </button>
        )}
      </div>
    </div>
  );
};
