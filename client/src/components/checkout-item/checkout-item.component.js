import React, { useContext} from "react";
import { CartContext } from "../../provider/cart/cart.provider";
import "./checkout-item.style.scss";


const CheckoutItem = ({ cartItem }) => {
    const { addItem, removeItem, clearItem } = useContext(CartContext)
    const { name, price, imageUrl, quantity} = cartItem
    return  (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item" />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="quantity-container">
                    <div className="arrow" onClick={() => removeItem(cartItem)}>&#10094;</div>
                    <span className="value">{quantity}</span>
                    <div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
                </div>
            </span>
            <span className="price">${price}</span>
            <div className="remove-button" onClick={() => clearItem(cartItem)}> &#10006; </div>
        </div>
    )
}


export default CheckoutItem;