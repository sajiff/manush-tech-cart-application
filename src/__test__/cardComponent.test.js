import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { Card } from "../component/cardComponent/Card";
import { store } from "../redux/store";

const DUMMY_DATA = {
  id: 1,
  title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  price: 109.95,
  description: "Your perfect pack for everyday use ...everyday",
  category: "men clothing",
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
};

// mocking localstorage start

const localStorageMock = (function () {
  let store = {};

  return {
    getItem(key) {
      return store[key];
    },

    setItem(key, value) {
      store[key] = value;
    },

    clear() {
      store = {};
    },

    removeItem(key) {
      delete store[key];
    },

    getAll() {
      return store;
    },
  };
})();

Object.defineProperty(window, "localStorage", { value: localStorageMock });

// mocking localstorage end

describe(Card, () => {
  beforeEach(() => {
    window.localStorage.clear();
  });
  it("Product card image is the right image as expected", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Card product={DUMMY_DATA} />
      </Provider>
    );
    const cardComponent = getByTestId("card-test").querySelector("img");
    expect(cardComponent.src).toEqual(DUMMY_DATA.image);
  });
  it("Product card title is the right title as expected", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Card product={DUMMY_DATA} />
      </Provider>
    );
    const cardTitle =
      getByTestId("card-test").querySelector("span").textContent;
    expect(cardTitle).toEqual(DUMMY_DATA.title);
  });
  it("Product card price is the right price as expected", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Card product={DUMMY_DATA} />
      </Provider>
    );
    const cardPrice =
      getByTestId("card-test").querySelector(".card-price").textContent;
    const dummyPrice = "৳" + DUMMY_DATA.price;
    expect(cardPrice).toEqual(dummyPrice);
  });
  it("Add to cart button works as expected as it stores data in localstorage using redux", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Card product={DUMMY_DATA} />
      </Provider>
    );
    const addToCartButton =
      getByTestId("card-test").querySelector(".add-to-cart-btn");
    fireEvent.click(addToCartButton);

    const localStorageData = JSON.parse(localStorage.getItem("cartItems"))[0];
    expect(localStorageData.id).toEqual(DUMMY_DATA.id);
  });
});
