import React, { useContext } from "react";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { useNavigate } from "react-router-dom";
import { CartDropdowncontainer, CartItemsContainer, EmptyMessageContainer  } from "./cart-dropdown.styled";
import { CartContext } from "../../provider/cart/cart.provider";

const CartDropdown = () => {
    const { cartItems, toggleHidden } = useContext(CartContext)
    const navigate = useNavigate()

    return (
        <CartDropdowncontainer>
            <CartItemsContainer>
                {
                    cartItems.length 
                    ?
                    cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem} />
                    ))
                    :
                    <EmptyMessageContainer>Nothing here yet. <br /> Your Cart is Waiting to Roll.</EmptyMessageContainer>
                }
            </CartItemsContainer>
            <CustomButton onClick={() => {
                navigate("/checkout")
                toggleHidden()
            }} >GO TO CHECKOUT</CustomButton>
    
        </CartDropdowncontainer>
    )
}


export default CartDropdown