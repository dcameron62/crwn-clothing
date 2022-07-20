/**
 * Created by PHP Storm
 * Author: Don Cameron
 * File Type: React Component
 * Date: 7/15/2022
 * Time: 7:19 PM
 */
import {createContext, useState} from "react";

//actual value to access
export const UserContext = createContext({
    setCurrentUser: () => null,
    currentUser: null,
})

export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser};
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}