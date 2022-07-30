/**
 * Created by PHP Storm
 * Author: Don Cameron
 * File Type: React Component
 * Date: 7/30/2022
 * Time: 8:56 AM
 */

import { useParams } from "react-router-dom";
import "./category.styles.scss";
import { Fragment, useContext, useEffect, useState } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import ShopCard from "../../components/shop-card/shop-card.component";

const Category = () => {
  //make the use of parameters available. use params comes in as an object
  const { category } = useParams();
  //bring in date through context
  const { categoriesMap } = useContext(CategoriesContext);
  //use state to maintain categories
  const [products, setProducts] = useState(categoriesMap[category]);

  //load products when page loads and when category or categoriesMap => state changes
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);
  return (
    <Fragment>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <ShopCard key={product.id} shopData={product} />
          ))}
      </div>
    </Fragment>
  );
};

export default Category;