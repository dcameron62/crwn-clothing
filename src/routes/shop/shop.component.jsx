/**
 * Created by PHP Storm
 * Author: Don Cameron
 * File Type: React Component
 * Date: 7/22/2022
 * Time: 7:57 AM
 */
import {Routes, Route} from "react-router-dom";
import "./shop.styles.scss";
import CategoriesPreview from "../categories-preview/categories-preview.component";

const Shop = () => {
  return (
  <Routes>
    <Route index element={<CategoriesPreview />} />
  </Routes>
  );
};

export default Shop;