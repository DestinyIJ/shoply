import shopActiontypes from "./shop.types";
import { db, collection, onSnapshot, query, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";

export const fetchCollectionSuccess = (collectionsMap) => ({
    type: shopActiontypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
})

export const fetchCollectionFailure = (errorMessage) => ({
    type: shopActiontypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
})

export const fetchCollectionStartAsync = () => {
    return dispatch => {
        const collectionRef = collection(db, "collections")
        
        const q = query(collectionRef)
        onSnapshot(q, (querySnapshot) => {
            const collectionsMap = convertCollectionsSnapshotToMap(querySnapshot)
            if(Object.keys(collectionsMap).length !== 0) {
                dispatch(fetchCollectionSuccess(collectionsMap))
            }
        }, (error) => {
            dispatch(fetchCollectionFailure(error.message))
        });
    }
}




