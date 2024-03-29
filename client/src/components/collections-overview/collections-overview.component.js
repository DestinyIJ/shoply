import React from "react";
import { useSelector } from "react-redux";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selector";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import { CollectionsOverviewContainer } from "./collections-overview.styled";

const CollectionsOverview = () => {
    const collections = useSelector(selectCollectionsForPreview)

    return (
        <CollectionsOverviewContainer>
            {
                collections.map(({id, ...otherCollectionProps}) => (
                    <CollectionPreview key={id} {...otherCollectionProps}  />
                ))
            }
        </CollectionsOverviewContainer>
    )
}


export default CollectionsOverview;