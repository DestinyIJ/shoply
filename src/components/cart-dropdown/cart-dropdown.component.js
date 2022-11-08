import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.action";
import { createStructuredSelector } from "reselect";
import { useNavigate } from "react-router-dom";
import { CartDropdowncontainer, CartItemsContainer, EmptyMessageContainer  } from "./cart-dropdown.styled";

const CartDropdown = ({ cartItems, dispatch }) => {
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
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default connect(mapStateToProps)(CartDropdown)