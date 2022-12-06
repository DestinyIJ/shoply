import React, { useContext } from "react";
import { CartIconContainer, ShoppingIconContainer, ItemCountContainer } from "./cart-icon.styled";
import { CartContext } from "../../provider/cart/cart.provider";

const CartIcon = () => {
    const { cartItemsCount, toggleHidden } = useContext(CartContext)

    return (
        <CartIconContainer onClick={() => toggleHidden()}>
            <ShoppingIconContainer />
            <ItemCountContainer>{cartItemsCount}</ItemCountContainer>
        </CartIconContainer>
    )
}


export default CartIcon;