/**
 * Created by PHP Storm
 * Author: Don Cameron
 * File Type: React Component
 * Date: 7/24/2022
 * Time: 12:11 PM
 */
import { createContext, useReducer } from "react";

import { createAction } from "../utils/reducer/reducer.utils";

/*helper function that checks the product to be added against the cart to see if it exists in the cart, if so it will increment that item count, if not it will create a new item.*/
const addCartItem = (cartItems, productToAdd) => {
  //find if cart contains productToAdd. cartItems.find returns true and exits when it finds a match, otherwise exits with false. cartItems.find loops through the cart items and compares two values.
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  //if found create a new array of cart items that increment the quantity by 1, if not return the cartItem unchanged
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  //return new array with modified cartItems/new cart item..returns new array so state will update
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

const CART_ACTION_TYPES = {
  SET_CART_ITEMS: "SET_CART_ITEMS",
  SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
};

//set initial state
const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartTotal: 0,
  cartCount: 0,
};

/*-----------reducer---------------*/
const cartReducer = (state, action) => {
  //deconstruch action into type and payload
  const { type, payload } = action;

  //switch depending on the type of action called
  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    default:
      throw new Error(`unhandled type of ${type} in cart reducer`);
  }
};

export const CartProvider = ({ children }) => {
  const [{ cartTotal, cartCount, cartItems, isCartOpen }, dispatch] =
    useReducer(cartReducer, INITIAL_STATE);

  //update the payload values for the reducer....dispatch
  const updateCartItemsReducer = (newCartItems) => {
    const newCartCount = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );

    const newCartTotal = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );

    dispatch(
      createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
        cartItems: newCartItems,
        cartTotal: newCartTotal,
        cartCount: newCartCount,
      })
    );
  };

  //add an item to the cart for use with the cart context object
  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    updateCartItemsReducer(newCartItems);
  };

  //remove an item from cart..if item count is zero then remove
  const removeItemToCart = (cartItemToRemove) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    updateCartItemsReducer(newCartItems);
  };

  //delete an item from the cart
  const deleteItemToCart = (cartItemToDelete) => {
    const newCartItems = deleteCartItem(cartItems, cartItemToDelete);
    updateCartItemsReducer(newCartItems);
  };

  //set is cart open
  const setIsCartOpen = (bool) => {
    dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool));
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