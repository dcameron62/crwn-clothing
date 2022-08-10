/**
 * Created by PHP Storm
 * Author: Don Cameron
 * Date: 8/9/2022
 * Time: 7:44 PM
 */


/*-------------------------------------------------user reducer------------------------------------------------------*/

//object that can be used in the code to prevent typo's when using actions...this is used the the user reducer switch statement.
export const USER_ACTION_TYPES = {
    SET_CURRENT_USER: "SET_CURRENT_USER",
};

const INITIAL_STATE = {
    currentUser: null
}

export const userReducer = (state = INITIAL_STATE, action) => {
    //deconstruct action into type and payload...type being a string and payload being the user in this case
    const {type, payload} = action;

    /*switch depending on the type of action called, in the case of SET_CURRENT_USER the state properties are spread in
     * then the current user is being set to the payload...NOTE...this returns a NEW OBJECT so the state will update
     */
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
/*-------------------------------------user reducer-------------------------------------------------------------------*/