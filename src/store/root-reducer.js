/**
 * Created by PHP Storm
 * Author: Don Cameron
 * Date: 8/9/2022
 * Time: 7:41 PM
 */

import {combineReducers} from "redux";
import {userReducer} from "./user/user.reducer";

export const rootReducer = combineReducers({
    user: userReducer
})