/**
 * Created by PHP Storm
 * Author: Don Cameron
 * File Type: React Component
 * Date: 7/22/2022
 * Time: 10:35 AM
 */
import "./shop-card.styles.scss";
import Button from "../button/button.component";

const ShopCard = ({ shopData }) => {
  const { name, imageUrl, price } = shopData;
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
        <Button buttonType="inverted">Add to cart</Button>
      </div>
    </div>
  );
};

export default ShopCard;