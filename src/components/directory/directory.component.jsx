/**
 * Created by PHP Storm
 * Author: Don Cameron
 * File Type: React Component
 * Date: 7/2/2022
 * Time: 4:36 PM
 */
import CategoryItem from "../category-item/category-item.component";
import "./directory-container.styles.scss";

const Directory = ({ categories }) => {
  // const cat = categories.categories;
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
