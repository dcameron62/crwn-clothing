/**
 * Created by PHP Storm
 * Author: Don Cameron
 * Date: 8/11/2022
 * Time: 6:47 PM
 */

import {combineReducers} from "redux";

import { userReducer } from "./user/user.reducer";
import { categoriesReducer } from "./categories/category.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
});