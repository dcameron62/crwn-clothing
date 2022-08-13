/**
 * Created by PHP Storm
 * Author: Don Cameron
 * File Type: React Component
 * Date: 7/4/2022
 * Time: 10:07 PM
 */
import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import CartIcon from "../../components/cart-icon/cart-icon.component";

import CartDropdownComponent from "../../components/cart-dropdown/cart-dropdown.component";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { signUserOut } from "../../utils/firebase/firebase.utils";

import { CartContext } from "../../contexts/cart.context";
import {selectCurrentUser} from "../../store/user/user.selector";
import {
  LogoContainer,
  NavigationContainer,
  NavLinks,
  NavLink,
} from "./navigation.styles";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const { isCartOpen } = useContext(CartContext);
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <div>
            <CrwnLogo className="logo" />
          </div>
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">Shop</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signUserOut}>
              Sign Out
            </NavLink>
          ) : (
            <NavLink to="/auth">Sign In</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdownComponent />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;