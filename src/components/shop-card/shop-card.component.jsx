/**
 * Created by PHP Storm
 * Author: Don Cameron
 * File Type: React Component
 * Date: 7/22/2022
 * Time: 10:35 AM
 */
import {useContext} from "react";
import {CartContext} from "../../contexts/cart.context";
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";
import {Name, Price, Footer, ProductCardContainer} from './shop-card.styles'

const ShopCard = ({shopData}) => {
    const {name, imageUrl, price} = shopData;
    const {addItemToCart} = useContext(CartContext);

    const addProductToCart = () => addItemToCart(shopData)

    return (
        <ProductCardContainer>
            <img src={imageUrl} alt={`${name}`}/>
            <Footer>
                <Name>{name}</Name>
                <Price>{price}</Price>
                <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>Add to cart</Button>
            </Footer>
        </ProductCardContainer>
    );
};

export default ShopCard;