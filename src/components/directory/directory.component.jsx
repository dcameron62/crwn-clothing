/**
 * Created by PHP Storm
 * Author: Don Cameron
 * File Type: React Component
 * Date: 7/2/2022
 * Time: 4:36 PM
 */
import DirectoryItem from "../directory-item/directory-item.component";
import {CategoriesContainer} from "./directory-container.styles";

const Directory = ({ categories }) => {
  // const cat = categories.categories;
  return (
    <CategoriesContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </CategoriesContainer>
  );
};

export default Directory;