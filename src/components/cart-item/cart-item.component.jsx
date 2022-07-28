/**
 * Created by PHP Storm
 * Author: Don Cameron
 * File Type: React Component
 * Date: 7/28/2022
 * Time: 10:50 AM
 */
import './cart-item.styles.scss'

const CartItem = ({cartItem}) => {
    const {name, imageUrl, price, quantity} = cartItem;
    return (
        <div className='cart-item-container'>
            <img src={imageUrl} alt={`Product ${name}`}/>
            <div className='item-details'>
                <span className='name'>{name}</span>
            <span className='price'>{quantity} x ${price}</span>
            </div>
        </div>
    )
}

export default CartItem;