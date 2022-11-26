import { createSelector } from "reselect";

const selectShop = state => state.shop

export const selectShopCollections = createSelector(
    [selectShop],
    (shop) => shop ? shop.collections : null
)

export const selectCollectionsForPreview = createSelector(
    [selectShopCollections],
    (collections) => collections ? Object.keys(collections).map(key => collections[key]) : []
)

export const selectIsCollectionFetched = createSelector(
    [selectShop],
    shop => !!shop.collections 
)

