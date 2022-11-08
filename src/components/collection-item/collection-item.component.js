import React from "react";
import { CollectionItemContainer, CollectionFooterContainer,
     ImageContainer, NameContainer, PriceContainer,
    CustomButtonContainer  } from "./collection-item.styled";


import { connect } from "react-redux";
import { addCartItem } from "../../redux/cart/cart.action";


export const CollectionItem =  ({ item, addCartItem }) => {
    const {name, imageUrl, price} = item

    return (
        <CollectionItemContainer>
            <ImageContainer
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <CollectionFooterContainer>
                <NameContainer>{name}</NameContainer>
                <PriceContainer>{price}</PriceContainer>
            </CollectionFooterContainer>
            <CustomButtonContainer onClick={() => addCartItem(item)} inverted>ADD TO CART</CustomButtonContainer>
        </CollectionItemContainer> 
    )
}

const mapDispatchToProps = (dispatch) => ({
    addCartItem: item => dispatch(addCartItem(item)),
})

export default connect(null, mapDispatchToProps)(CollectionItem);