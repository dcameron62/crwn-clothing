/**
 * Created by PHP Storm
 * Author: Don Cameron
 * File Type: React Component
 * Date: 7/22/2022
 * Time: 7:57 AM
 */
import { useContext } from "react";
import { ShopContext } from "../../contexts/shop.context";
// import SHOP_DATA from "../../shop-data.json";

const Shop = () => {
  const { shopData } = useContext(ShopContext);
  return (
    <div>
      {shopData.map(({ id, name }) => (
        <div key={id}>
          <h1>{name}</h1>
        </div>
      ))}
    </div>
  );
};

export default Shop;