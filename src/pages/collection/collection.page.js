import React from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectShopCollections } from "../../redux/shop/shop.selector";
import CollectionItem from "../../components/collection-item/collection-item.component";

import { CollectionContainer, TitleContainer, ItemsContainer } from "./collection.styled";

const CollectionPage = ({collections}) => {
    const { collectionId } = useParams()
    const collection = collections[collectionId]
    const { title, items } = collection


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


const mapStateToProps = createStructuredSelector({
    collections: selectShopCollections
})

export default connect(mapStateToProps)(CollectionPage)