import React from "react";
import './collection-item.style.scss';
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import { addCartItem } from "../../redux/cart/cart.action";


export const CollectionItem =  ({ item, addCartItem }) => {
    const {name, imageUrl, price} = item

    return (
        <div className="collection-item">
            <div
                className="image"
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <CustomButton onClick={() => addCartItem(item)} inverted>ADD TO CART</CustomButton>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    addCartItem: item => dispatch(addCartItem(item)),
})

export default connect(null, mapDispatchToProps)(CollectionItem);