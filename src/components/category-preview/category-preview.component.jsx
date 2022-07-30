/**
 * Created by PHP Storm
 * Author: Don Cameron
 * File Type: React Component
 * Date: 7/30/2022
 * Time: 7:32 AM
 */

import "./category-preview.styles.scss";
import ShopCard from "../shop-card/shop-card.component";
import {Link} from "react-router-dom";

const CategoryPreview = ({ title, products }) => {
  return (
    <div className="category-preview-container">
      <h2>
        <Link to={title} className="title">{title.toUpperCase()}</Link>
      </h2>
      <div className="preview">
        {products.filter((_, idx) => idx < 4 ).map((product)=>{
            return (<ShopCard key={product.id} shopData={product} />)

        })}
      </div>
    </div>
  );
};

export default CategoryPreview;