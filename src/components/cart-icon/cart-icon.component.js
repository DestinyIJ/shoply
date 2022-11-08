import React from "react";
import { CartIconContainer, ShoppingIconContainer, ItemCountContainer } from "./cart-icon.styled";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.action";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";

const CartIcon = ({toggleCartHidden, itemCount}) => (
    <CartIconContainer onClick={toggleCartHidden}>
        <ShoppingIconContainer />
        <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartIconContainer>
)


const mapStateToProps = createStructuredSelector(
    {
    itemCount: selectCartItemsCount
    }
)
const mapDispatchToProps = (dispath) => ({
    toggleCartHidden : () => dispath(toggleCartHidden())
})
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);