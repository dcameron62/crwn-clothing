/**
 * Created by PHP Storm
 * Author: Don Cameron
 * File Type: React Component
 * Date: 7/22/2022
 * Time: 7:57 AM
 */
import { useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import "./shop.styles.scss";
import CategoryPreview from "../../components/category-preview/category-preview.component";

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <div className="shop-container">
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return <CategoryPreview key={title} title={title} products={products} />
      })}
    </div>
  );
};

export default Shop;