import React from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectShopCollections } from "../../redux/shop/shop.selector";
import { CollectionItem } from "../../components/collection-item/collection-item.component";

import "./collection.style.scss";

const CollectionPage = ({collections}) => {
    const { collectionId } = useParams()
    const collection = collections[collectionId]
    const { title, items } = collection

    return (
        <div className="collection-page">
            <h2 className="title">{ title }</h2>
            <div className="items">
                {
                    items.map(item => (
                        <CollectionItem key={item.id} item={item} />
                    ))
                }
            </div>
        </div>
    )
}


const mapStateToProps = createStructuredSelector({
    collections: selectShopCollections
})

export default connect(mapStateToProps)(CollectionPage)