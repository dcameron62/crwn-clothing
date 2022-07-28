/**
 * Created by PHP Storm
 * Author: Don Cameron
 * File Type: React Component
 * Date: 7/22/2022
 * Time: 9:34 PM
 */
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./cart-component.styles.scss";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

const CartDropdownComponent = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button>Go To Checkout</Button>
    </div>
  );
};

export default CartDropdownComponent;