/**
 * Created by PHP Storm
 * Author: Don Cameron
 * File Type: React Component
 * Date: 7/30/2022
 * Time: 8:56 AM
 */

import {useParams} from "react-router-dom";
import {Fragment, useEffect, useState} from "react";
import ShopCard from "../../components/shop-card/shop-card.component";
import {CategoryContainer, CategoryTitle} from "./category.styles";
import {useSelector} from "react-redux";
import {selectCategoriesMap} from "../../store/categories/category.selector";

const Category = () => {
    const categoriesMap = useSelector(selectCategoriesMap);
    //make the use of parameters available. use params comes in as an object
    const {category} = useParams();
    //bring in date through context
    //use state to maintain categories
    const [products, setProducts] = useState(categoriesMap[category]);

    //load products when page loads and when category or categoriesMap => state changes
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);
  return (
    <Fragment>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ShopCard key={product.id} shopData={product} />
          ))}
      </CategoryContainer>
    </Fragment>
  );
};

export default Category;