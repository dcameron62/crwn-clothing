/**
 * Created by PHP Storm
 * Author: Don Cameron
 * File Type: React Component
 * Date: 7/22/2022
 * Time: 9:34 PM
 */
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { useNavigate } from "react-router-dom";
import {CartDropDownContainer, CartItems} from "./cart-component.styles";

const CartDropdownComponent = () => {
  const { cartItems } = useContext(CartContext);

  const navigate = useNavigate();

  const goToCheckOutHandler = () => {
    navigate("/checkout");
  };

  return (
    <CartDropDownContainer>
      <CartItems>
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </CartItems>
      <div>
        <Button onClick={goToCheckOutHandler}>Go To Checkout</Button>
      </div>
    </CartDropDownContainer>
  );
};

export default CartDropdownComponent;