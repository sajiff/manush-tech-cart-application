import { useState } from "react";
import "./App.css";
import { CartModal } from "./component/cartComponent/CartModal";
import { Navbar } from "./component/navbarComponent/Navbar";
import { HomePage } from "./pages/homePage/HomePage";

function App() {
  const [cartToggle, setcartToggle] = useState(false);
  return (
    <div>
      <Navbar cartToggle={cartToggle} openCart={() => setcartToggle(true)} />
      <HomePage />
      <CartModal open={cartToggle} closeModal={() => setcartToggle(false)} />
    </div>
  );
}

export default App;
