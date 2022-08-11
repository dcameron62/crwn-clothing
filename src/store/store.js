/**
 * Created by PHP Storm
 * Author: Don Cameron
 * Date: 8/9/2022
 * Time: 7:11 PM
 */
import {
  compose,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";
import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

const middleWares = [logger];

const composeEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composeEnhancers);