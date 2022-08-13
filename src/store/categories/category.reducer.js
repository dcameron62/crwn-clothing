/**
 * Created by PHP Storm
 * Author: Don Cameron
 * Date: 8/12/2022
 * Time: 8:00 PM
 */

import {CATEGORIES_ACTION_TYPES} from "./category.types";

export const CATEGORIES_INITIAL_STATE = {
    categoriesMap: {}
}

export const categoriesReducer = (state = CATEGORIES_INITIAL_STATE, action = {}) => {
    const {type, payload} = action

    switch (type) {
        case CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP:
            return {...state, categoriesMap: payload}
        default:
            return state;
    }
}