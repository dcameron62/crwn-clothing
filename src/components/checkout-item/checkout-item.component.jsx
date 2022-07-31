/**
 * Created by PHP Storm
 * Author: Don Cameron
 * File Type: React Component
 * Date: 7/28/2022
 * Time: 3:07 PM
 */
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import {
  CheckoutItemContainer,
  ImageContainer,
  Image,
  Name,
  Price,
  Quantity,
  Value,
} from "./checkout-item.styles";

const CheckOutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { deleteItemToCart, addItemToCart, removeItemToCart } =
    useContext(CartContext);

  const deleteItemHandler = () => deleteItemToCart(cartItem);
  const removeItemToCartHandler = () => removeItemToCart(cartItem);
  const addItemToCartHandler = () => addItemToCart(cartItem);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <Image src={imageUrl} alt={name} />
      </ImageContainer>

      <Name>{name}</Name>
      <Quantity>
        <button
          type="button"
          className="arrow"
          onClick={removeItemToCartHandler}
        >
          &#10094;
        </button>

        <Value> {quantity} </Value>

        <button type="button" className="arrow" onClick={addItemToCartHandler}>
          &#10095;
        </button>
      </Quantity>
      <Price>${price}</Price>

      <div onClick={deleteItemHandler} className="remove-button">
        &#10005;
      </div>
    </CheckoutItemContainer>
  );
};

export default CheckOutItem;