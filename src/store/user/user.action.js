import {createAction} from "../../utils/reducer/reducer.utils";
import {USER_ACTION_TYPES} from "./user.types";

/**
 * Created by PHP Storm
 * Author: Don Cameron
 * Date: 8/12/2022
 * Time: 6:36 PM
 */

export const setCurrentUser = (user) => createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);