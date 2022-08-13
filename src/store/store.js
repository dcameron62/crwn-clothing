/**
 * Created by PHP Storm
 * Author: Don Cameron
 * Date: 8/11/2022
 * Time: 6:43 PM
 */

import {compose, createStore, applyMiddleware} from "redux";
import {logger} from "redux-logger";

import {rootReducer} from "./root-reducer";

const middleWares = [logger]

const composedEnhancers = compose(applyMiddleware(...middleWares))

export const store = createStore(rootReducer, undefined, composedEnhancers)