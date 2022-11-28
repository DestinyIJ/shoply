import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectShopCollections } from "../../redux/shop/shop.selector";
import CollectionItem from "../../components/collection-item/collection-item.component";

import { CollectionContainer, TitleContainer, ItemsContainer } from "./collection.styled";

const CollectionPage = () => {
    const { collectionId } = useParams()
    const collections = useSelector(selectShopCollections)
    const { title, items } = collections[collectionId]


    return (
        <CollectionContainer>
            <TitleContainer>{ title }</TitleContainer>
            <ItemsContainer>
                {
                    items.map(item => (
                        <CollectionItem key={item.id} item={item} />
                    ))
                }
            </ItemsContainer>
        </CollectionContainer> 
    )
}

export default CollectionPage