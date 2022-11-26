import React from "react";
import { CollectionItemContainer, CollectionFooterContainer,
     ImageContainer, NameContainer, PriceContainer,
    CustomButtonContainer  } from "./collection-item.styled";


import { useDispatch } from "react-redux";
import { addCartItem } from "../../redux/cart/cart.action";


export const CollectionItem =  ({ item }) => {
    const dispatch = useDispatch()
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
            <CustomButtonContainer onClick={() => dispatch(addCartItem(item)) } inverted>ADD TO CART</CustomButtonContainer>
        </CollectionItemContainer> 
    )
}


export default CollectionItem;