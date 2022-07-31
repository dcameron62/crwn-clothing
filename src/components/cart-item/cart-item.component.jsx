/**
 * Created by PHP Storm
 * Author: Don Cameron
 * File Type: React Component
 * Date: 7/28/2022
 * Time: 10:50 AM
 */
import {CartItemContainer, Image, ItemDetails, Name} from "./cart-item.styles";

const CartItem = ({cartItem}) => {
    const {name, imageUrl, price, quantity} = cartItem;
    return (
        <CartItemContainer>
            <Image src={imageUrl} alt={`Product ${name}`}/>
            <ItemDetails>
                <Name>{name}</Name>
            <span className='price'>{quantity} x ${price}</span>
            </ItemDetails>
        </CartItemContainer>
    )
}

export default CartItem;