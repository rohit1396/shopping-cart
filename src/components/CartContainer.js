import React from "react";
import "./CartContainer.css";
import { useGlobalContext } from "../context";
import CartItem from "./CartItem";

const CartContainer = () => {
  const { cart, total, clearCart, fetchData } = useGlobalContext();

  if (cart?.length === 0) {
    return (
      <section className="cart_empty">
        <h2 className="cart_title">Your Cart is Empty</h2>
        <button className="button_refresh" onClick={fetchData}>
          Refresh
        </button>
      </section>
    );
  }
  return (
    <section>
      <header>
        <h2 className="cart_title">Your Cart</h2>
      </header>
      <div>
        {cart?.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <div className="border"></div>
      <footer>
        <button onClick={clearCart}>Clear All</button>
        <p>
          Total :<span> {total}$</span>
        </p>
      </footer>
    </section>
  );
};

export default CartContainer;
