/**
 * Created by PHP Storm
 * Author: Don Cameron
 * File Type: React Component
 * Date: 7/22/2022
 * Time: 7:57 AM
 */
import { useContext } from "react";
import { ShopContext } from "../../contexts/shop.context";
import ShopCardComponent from "../../components/shop-card/shop-card.component";
import './shop.styles.scss';

const Shop = () => {
  const { shopData } = useContext(ShopContext);
  return (
    <div className='products-container'>
      {shopData.map((shop) => (
        <div key={shop.id}>
          <ShopCardComponent shopData={shop} />
        </div>
      ))}
    </div>
  );
};

export default Shop;