import React, { useContext}  from "react";
import { CollectionItemContainer, CollectionFooterContainer,
     ImageContainer, NameContainer, PriceContainer,
    CustomButtonContainer  } from "./collection-item.styled";

import { CartContext } from "../../provider/cart/cart.provider";



export const CollectionItem =  ({ item }) => {
    const { addItem } = useContext(CartContext)
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
            <CustomButtonContainer onClick={() => addItem(item) } inverted>ADD TO CART</CustomButtonContainer>
        </CollectionItemContainer> 
    )
}


export default CollectionItem;