/**
 * Created by PHP Storm
 * Author: Don Cameron
 * File Type: React Component
 * Date: 7/28/2022
 * Time: 2:56 PM
 */
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./checkout.styles.scss";
import CheckOutItem from "../../components/checkout-item/checkout-item.component";

const Checkout = () => {
  const { cartItems, deleteItemToCart, cartTotal } = useContext(CartContext);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

        {cartItems.map((cartItem) => (
          <CheckOutItem
            key={cartItem.id}
            cartItem={cartItem}
            deleteItemToCart={() => {
              deleteItemToCart(cartItem);
            }}
          />
        ))}


      <span className="total">
        <h2>Total: ${cartTotal}</h2>
      </span>
    </div>
  );
};

export default Checkout;