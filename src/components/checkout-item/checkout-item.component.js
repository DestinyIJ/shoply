import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { removeCartItem, addCartItem, reduceCartItemCount } from "../../redux/cart/cart.action";
import "./checkout-item.style.scss";

const CheckoutItem = ({ cartItem , removeCartItem, addCartItem, reduceCartItemCount}) => {
    const { name, price, imageUrl, quantity} = cartItem
    return  (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item" />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="quantity-container">
                    <div className="arrow" onClick={() => reduceCartItemCount(cartItem)}>&#10094;</div>
                    <span className="value">{quantity}</span>
                    <div className="arrow" onClick={() => addCartItem(cartItem)}>&#10095;</div>
                </div>
            </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={() => removeCartItem(cartItem)}> &#10006; </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    removeCartItem: (item) => dispatch(removeCartItem(item)),
    addCartItem: (item) => dispatch(addCartItem(item)),
    reduceCartItemCount: (item) => dispatch(reduceCartItemCount(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);