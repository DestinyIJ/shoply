import React, { useContext } from "react";
import { ReactComponent as Logo } from '../../assets/crown-logo.svg';
import { useSelector, useDispatch } from "react-redux";
import CartIcon  from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { HeaderContainer, OptionsContainer, OptionLink, OptionDiv, LogoContainer } from "./header.styled";
import { signOutStart } from "../../redux/user/user.action";
import { CartContext } from "../../provider/cart/cart.provider";


const Header = () => {
    const dispatch = useDispatch()
    const currentUser = useSelector(selectCurrentUser)
    const { hidden } = useContext(CartContext)

    return (
        <HeaderContainer>
            <LogoContainer to="/">
                <Logo className="logo"/>
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to="/shop">
                    SHOP
                </OptionLink>
                <OptionLink to="/contact">
                    CONTACT
                </OptionLink>
                {
                    currentUser ?
                    <OptionDiv role="button"  onClick={() => dispatch(signOutStart())}>
                        SIGN OUT
                    </OptionDiv>
                    :
                    <OptionLink to="/signin">
                        SIGN IN
                    </OptionLink>
                }
                <CartIcon />
            </OptionsContainer>
            {hidden ? null : <CartDropdown />}
        </HeaderContainer>
    )
}


export default Header;