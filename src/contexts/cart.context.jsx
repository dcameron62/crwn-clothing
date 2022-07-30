/**
 * Created by PHP Storm
 * Author: Don Cameron
 * File Type: React Component
 * Date: 7/24/2022
 * Time: 12:11 PM
 */
import { createContext, useState, useEffect } from "react";

/*helper function that checks the product to be added against the cart to see if it exists in the cart, if so it will increment that item count, if not it will create a new item.*/
const addCartItem = (cartItems, productToAdd) => {
  //find if cart contains productToAdd. cartItems.find returns true and exits when it finds a match, otherwise exits with false. cartItems.find loops through the cart items and compares two values.
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  //if found create a new array of cart items that increments the quantity by 1, if not return the cartItem unchanged
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  //return new array with modified cartItems/new cart item
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
  //does the item exist in the cart
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  //if quantity of item = 1 then remove the item from the cart
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  //find the item in the cart. spread the other properties and decrement the quantity.
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const deleteCartItem = (cartItems, cartItemToDelete) => {
  //does the item exist in the cart
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToDelete.id
  );

  //if quantity of item = 1 then remove the item from the cart
  if (existingCartItem) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToDelete.id);
  }
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  cartTotal: 0,
  addItemToCart: () => {},
  removeItemToCart: () => {},
  deleteItemToCart: () => {},
  cartCount: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  //uses the array.reduce function to count all the items in the cart then sets the count to the cart count useState
  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );

    setCartCount(newCartCount);
  }, [cartItems]);

  //uses the array.reduce to get a sum of all extended prices and set it in the cart total
  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );

    setCartTotal(newCartTotal);
  }, [cartItems]);

  //add an item to the cart for use with the cart context object
  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  //remove an item from cart..if item count is zero then remove
  const removeItemToCart = (cartItemToRemove) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove));
  };

  //delete an item from the cart
  const deleteItemToCart = (cartItemToDelete) => {
    setCartItems(deleteCartItem(cartItems, cartItemToDelete));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    removeItemToCart,
    deleteItemToCart,
    cartItems,
    cartTotal,
    cartCount,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};