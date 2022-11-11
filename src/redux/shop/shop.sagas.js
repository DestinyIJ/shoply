import { call, put, takeLatest, all } from 'redux-saga/effects'
import { db, getDocs, collection, query, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";
import { fetchCollectionSuccess, fetchCollectionFailure } from './shop.actions';
import shopActiontypes from './shop.types';

function* fetchCollectionsAsync() {
    try {
        const collectionRef = collection(db, "collections")
        const q = query(collectionRef)

        const snapshot = yield getDocs(q)
        if(!snapshot.empty) {
            const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot)
            yield put(fetchCollectionSuccess(collectionsMap))
            return
        }
        yield call(fetchCollectionsAsync)
        
    } catch (error) {
        yield put(fetchCollectionFailure(error.message))
    }
}

function* onfetchCollectionStart() {
    yield takeLatest(shopActiontypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync)
}

export default function* shopSagas() {
    yield all([
        call(onfetchCollectionStart)
    ])
}



