/**
 * Created by PHP Storm
 * Author: Don Cameron
 * Date: 8/11/2022
 * Time: 6:50 PM
 */

export const USER_ACTION_TYPES = {
    SET_CURRENT_USER: "SET_CURRENT_USER",
};

const INITIAL_STATE = {
    currentUser: null,
};

export const userReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload,
            };
        default:
            return state;
    }
};