import React from "react";
import "./CartContainer.css";
import { useGlobalContext } from "../context";
import CartItem from "./CartItem";

const CartContainer = () => {
  const { cart, total, clearCart, fetchData } = useGlobalContext();

  if (cart?.length === 0) {
    return (
      <section>
        <h2 className="cart_title">Your Cart is Empy</h2>
        <button onClick={fetchData}>Refresh</button>
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
      <footer>
        <button onClick={clearCart}>Clear All</button>
        <span>Total : {total}$</span>
      </footer>
    </section>
  );
};

export default CartContainer;
