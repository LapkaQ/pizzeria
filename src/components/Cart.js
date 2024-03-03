import React from "react";

const Cart = (props) => {
  return (
    <div className="cart cartPlus">
      <div className="cartText">
        <p>{props.name} </p>
        <em>{props.price}zł</em>
      </div>
      <div className="cartButtons">
        <button
          className="material-symbols-outlined cartButton"
          onClick={() => props.cartClick(props.id, "remove")}
        >
          remove
        </button>
        <p className="cartValue">{props.quantity}</p>
        <button
          className="material-symbols-outlined cartButton"
          onClick={() => props.cartClick(props.id, "add")}
        >
          add
        </button>
      </div>
    </div>
  );
};

export default Cart;
