import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { useSelector, useDispatch } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.action";
import { useNavigate } from "react-router-dom";
import { CartDropdowncontainer, CartItemsContainer, EmptyMessageContainer  } from "./cart-dropdown.styled";

const CartDropdown = () => {
    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems)
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
                dispatch(toggleCartHidden())
            }} >GO TO CHECKOUT</CustomButton>
    
        </CartDropdowncontainer>
    )
}


export default CartDropdown