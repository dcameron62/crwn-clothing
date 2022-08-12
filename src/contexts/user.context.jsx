/**
 * Created by PHP Storm
 * Author: Don Cameron
 * File Type: React Component
 * Date: 7/15/2022
 * Time: 7:19 PM
 */
import { createContext, useEffect, useReducer } from "react";

import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "../utils/firebase/firebase.utils";

import { createAction } from "../utils/reducer/reducer.utils";

//actual value to access and creates the context UserContext
export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
});

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};

const INITIAL_STATE = {
  currentUser: null,
};

const userReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    default:
      throw new Error(`unhandled type ${type} in the user reducer`);
  }
};



export const UserProvider = ({ children }) => {
  //useReducer hook is used instead of useState
  /*useReducer hook takes two arguments, the userReducer and the second is the initial value for the state...in this case
   * the initial value for the current user.....we deconstruct what we get back from the useReducer...always get two
   * values. the current state that is being stored and the second is a dispatch function*/
  //state is destructured directly to { currentUser }-----------
  const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);

  /*setCurrentUser that is shared from the current user context is defined....setCurrentUser was used by the useState hook
   * but now is being user by reducer and context*/
  const setCurrentUser = (user) => {
    /*when it is called you pass it an action object. takes the action and passes it into the reducer and runs through
     * the switch statement and update the reducer*/
    dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));
  };

  //values passed into the context provider
  const value = { currentUser, setCurrentUser };

  //runs use effect when user context loads the first time
  useEffect(() => {
    return onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });
  }, []);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};