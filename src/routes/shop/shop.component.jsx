/**
 * Created by PHP Storm
 * Author: Don Cameron
 * File Type: React Component
 * Date: 7/22/2022
 * Time: 7:57 AM
 */
import { Fragment, useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import ShopCardComponent from "../../components/shop-card/shop-card.component";
import "./shop.styles.scss";

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => (
        <Fragment key={title}>
          <h2>{title}</h2>
          <div className="products-container">
            {categoriesMap[title].map((category) => (
              <div key={category.id}>
                <ShopCardComponent shopData={category} />
              </div>
            ))}
          </div>
        </Fragment>
      ))}
    </Fragment>
  );
};

export default Shop;