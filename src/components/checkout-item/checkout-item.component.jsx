/**
 * Created by PHP Storm
 * Author: Don Cameron
 * File Type: React Component
 * Date: 7/28/2022
 * Time: 3:07 PM
 */
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./checkout-item.styles.scss";

const CheckOutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { deleteItemToCart, addItemToCart, removeItemToCart } =
    useContext(CartContext);

  const deleteItemHandler = () => deleteItemToCart(cartItem);
  const removeItemToCartHandler = () => removeItemToCart(cartItem);
  const addItemToCartHandler = () => addItemToCart(cartItem);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>

      <span className="name">{name}</span>
<div className='quantity'>
      <button type="button" className="arrow" onClick={removeItemToCartHandler}>
        &#10094;
      </button>

      <span className="value"> {quantity} </span>

      <button type="button" className="arrow" onClick={addItemToCartHandler}>
        &#10095;
      </button>
</div>
      <span className="price">${price}</span>

      <div onClick={deleteItemHandler} className="remove-button">
        &#10005;
      </div>
    </div>
  );
};

export default CheckOutItem;