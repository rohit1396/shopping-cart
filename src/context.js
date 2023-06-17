import React, { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";

const url = "https://course-api.com/react-useReducer-cart-project";
const CartContext = createContext();

const initialState = {
  loading: false,
  cart: [],
  amount: 0,
  total: 0,
};

// console.log(cart);

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const increaseItem = (id) => {
    dispatch({ type: "INCREASE_ITEM", payload: id });
  };

  const decreaseItem = (id) => {
    dispatch({ type: "DECREASE_ITEM", payload: id });
  };

  const toggleAmount = (id, type) => {
    dispatch({ tytpe: "TOGGLE_AMOUNT", payload: { id, type } });
  };

  const fetchData = async () => {
    dispatch({ type: "LOADING" });
    const response = await fetch(url);
    const cart = await response.json();
    dispatch({ type: "DISPLAY_ITEMS", payload: cart });
    console.log(cart);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    dispatch({ type: "GET_TOTALS" });
  }, [state.cart]);
  return (
    <CartContext.Provider
      value={{
        ...state,
        fetchData,
        clearCart,
        removeItem,
        increaseItem,
        decreaseItem,
        toggleAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useGlobalContext = () => useContext(CartContext);
