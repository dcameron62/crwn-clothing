/**
 * Created by PHP Storm
 * Author: Don Cameron
 * File Type: React Component
 * Date: 7/22/2022
 * Time: 8:12 AM
 */
import {createContext, useEffect, useState} from "react";
import SHOP_DATA from "../shop-data.json";

export const ShopContext = createContext({
    setShopData: SHOP_DATA
});

export const ShopProvider = ({children}) => {
    const [shopData, setShopData] = useState(SHOP_DATA);
    const value = {shopData, setShopData};
    useEffect(() => {
        return () => {
            setShopData(SHOP_DATA);
        };
    }, [shopData]);

    return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};