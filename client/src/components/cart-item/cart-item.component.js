import React from "react";
import { CartItemContainer, ImageContainer, ItemsDetailsContainer } from "./cart-item.styled";

const CartItem = ({ item: { imageUrl, price, name, quantity }}) => (
    <CartItemContainer>
        <ImageContainer src={imageUrl} alt="item" />
        <ItemsDetailsContainer>
            <span className="name">{name}</span>
            <span className="price">
                {quantity} x ${price}
            </span>
        </ItemsDetailsContainer>
    </CartItemContainer>
)

export default CartItem