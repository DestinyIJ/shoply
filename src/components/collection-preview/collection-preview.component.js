import React from "react";
import { useNavigate } from 'react-router-dom';

import './collection-preview.style.scss';
import CollectionItem from "../collection-item/collection-item.component";

const CollectionPreview = ({title, path, items}) => {
    const navigate = useNavigate();

    return (
        <div className="collection-preview" onClick={() => navigate(`${path}`)}>
            <h1 className="title">{ title.toUpperCase() }</h1>
            <div className="preview">
                {
                    items.filter((item, index) => index < 4).map(({id, ...otherItemProps}) => (
                        <CollectionItem key={ id } { ...otherItemProps } />
                    ))
                }
            </div>
        </div>
    )
}

export default CollectionPreview;