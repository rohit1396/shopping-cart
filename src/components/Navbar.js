import React from "react";
import "./Navbar.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useGlobalContext } from "../context";

const Navbar = () => {
  const { cart } = useGlobalContext();
  return (
    <div className="navbar">
      <h1>Shopping Cart</h1>
      <div>
        <ShoppingCartIcon className="cart" />
        <span>{cart?.length}</span>
      </div>
    </div>
  );
};

export default Navbar;
