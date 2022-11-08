import React from "react";
import { ReactComponent as Logo } from '../../assets/crown-logo.svg';
import { auth } from '../../firebase/firebase.utils';
import { connect } from "react-redux";
import CartIcon  from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { createStructuredSelector } from "reselect";
import { HeaderContainer, OptionsContainer, OptionLink, OptionDiv, LogoContainer } from "./header.styled";


const Header = ({ currentUser, hidden }) => {
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
                    <OptionDiv role="button"  onClick={() => auth.signOut()}>
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

const mapStateToProps = createStructuredSelector(
    {
        currentUser : selectCurrentUser,
        hidden : selectCartHidden
    }
)


export default connect(mapStateToProps)(Header);