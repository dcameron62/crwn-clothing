/**
 * Created by PHP Storm
 * Author: Don Cameron
 * File Type: React Component
 * Date: 7/30/2022
 * Time: 7:32 AM
 */

import ShopCard from "../shop-card/shop-card.component";
import {CategoryPreviewContainer, Preview, Title} from "./category-preview.styles";

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Title to={title}>{title.toUpperCase()}</Title>
      </h2>
      <Preview>
        {products.filter((_, idx) => idx < 4 ).map((product)=>{
            return (<ShopCard key={product.id} shopData={product} />)

        })}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;