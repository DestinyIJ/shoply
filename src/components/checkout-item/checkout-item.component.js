import React from "react";
import { useDispatch } from "react-redux";
import { removeCartItem, addCartItem, reduceCartItemCount } from "../../redux/cart/cart.action";
import "./checkout-item.style.scss";

const CheckoutItem = ({ cartItem }) => {
    const dispatch = useDispatch()
    const { name, price, imageUrl, quantity} = cartItem
    return  (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item" />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="quantity-container">
                    <div className="arrow" onClick={() => dispatch(reduceCartItemCount(cartItem))}>&#10094;</div>
                    <span className="value">{quantity}</span>
                    <div className="arrow" onClick={() => dispatch(addCartItem(cartItem))}>&#10095;</div>
                </div>
            </span>
            <span className="price">${price}</span>
            <div className="remove-button" onClick={() => dispatch(removeCartItem(cartItem))}> &#10006; </div>
        </div>
    )
}


export default CheckoutItem;