import React from "react";
import "./CartItem.css";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { useGlobalContext } from "../context";

const CartItem = ({ id, img, price, title, amount }) => {
  const { removeItem, increaseItem, decreaseItem } = useGlobalContext();
  return (
    <article className="cartitem">
      <div>
        <img className="cartitem_img" src={img} alt={title} />
        <div className="cartitem_details">
          <h4>{title}</h4>
          <h2>{price}</h2>
          <button onClick={() => removeItem(id)}>Remove</button>
        </div>
      </div>
      <div className="cartitem_amount">
        <AddIcon className="addicon" onClick={() => increaseItem(id)} />
        <span>{amount}</span>
        <RemoveIcon className="removeicon" onClick={() => decreaseItem(id)} />
      </div>
    </article>
  );
};

export default CartItem;
