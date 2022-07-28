/**
 * Created by PHP Storm
 * Author: Don Cameron
 * File Type: React Component
 * Date: 7/22/2022
 * Time: 10:35 AM
 */
import {useContext} from "react";
import {CartContext} from "../../contexts/cart.context";
import "./shop-card.styles.scss";
import Button from "../button/button.component";

const ShopCard = ({shopData}) => {
    const {name, imageUrl, price} = shopData;
    const {addItemToCart} = useContext(CartContext);

    const addProductToCart = () => addItemToCart(shopData)

    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={`${name}`}/>
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
                <Button buttonType="inverted" onClick={addProductToCart}>Add to cart</Button>
            </div>
        </div>
    );
};

export default ShopCard;