import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import "./App.css";
import { CartModal } from "./component/cartComponent/CartModal";
import { Modal } from "./component/modal/Modal";
import { Navbar } from "./component/navbarComponent/Navbar";
import { HomePage } from "./pages/homePage/HomePage";

function App() {
  const [cartToggle, setcartToggle] = useState(false);
  const [modalToggle, setmodalToggle] = useState(true);

  return (
    <div>
      <Navbar cartToggle={cartToggle} openCart={() => setcartToggle(true)} />
      <HomePage />
      <CartModal
        open={cartToggle}
        closeModal={() => setcartToggle(false)}
        checkoutModal={() => setmodalToggle(true)}
      />
      <Modal open={modalToggle} closeModal={() => setmodalToggle(false)}>
        <h1>Your order has been placed!</h1>
      </Modal>
    </div>
  );
}

export default App;
