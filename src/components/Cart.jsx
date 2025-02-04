import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/slices/cartSlice";

const Cart = () => {  
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="cart-card">
            <span>
              {item.name} (x{item.quantity}) - ${item.price * item.quantity}
            </span>
            <button onClick={() => dispatch(removeFromCart(item))}>
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;  
