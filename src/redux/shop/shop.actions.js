import shopActiontypes from "./shop.types";

export const fetchCollectionStart = () => ({
    type: shopActiontypes.FETCH_COLLECTIONS_START
})

export const fetchCollectionSuccess = (collectionsMap) => ({
    type: shopActiontypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
})

export const fetchCollectionFailure = (errorMessage) => ({
    type: shopActiontypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
})





