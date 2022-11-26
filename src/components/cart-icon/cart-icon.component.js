import React from "react";
import { CartIconContainer, ShoppingIconContainer, ItemCountContainer } from "./cart-icon.styled";
import { useDispatch, useSelector } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.action";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

const CartIcon = () => {
    const dispatch = useDispatch()
    const itemCount = useSelector(selectCartItemsCount)

    return (
        <CartIconContainer onClick={() => dispatch(toggleCartHidden())}>
            <ShoppingIconContainer />
            <ItemCountContainer>{itemCount}</ItemCountContainer>
        </CartIconContainer>
    )
}


export default CartIcon;