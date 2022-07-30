/**
 * Created by PHP Storm
 * Author: Don Cameron
 * File Type: React Component
 * Date: 7/22/2022
 * Time: 8:12 AM
 */
import { createContext, useEffect, useState } from "react";

export const ShopContext = createContext({
  products: [],
});

export const ShopProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const value = { products };


  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};