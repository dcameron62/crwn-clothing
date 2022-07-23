/**
 * Created by PHP Storm
 * Author: Don Cameron
 * File Type: React Component
 * Date: 7/22/2022
 * Time: 9:34 PM
 */
import "./cart-component.styles.scss";
import Button from "../button/button.component";

const CartDropdownComponent = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items" />
      <Button>Go To Checkout</Button>
    </div>
  );
};

export default CartDropdownComponent;