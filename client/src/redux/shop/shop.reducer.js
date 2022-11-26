import shopActiontypes from "./shop.types";

const INITIAL_STATE = {
    collections: null,
    errorMessage: undefined,
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case shopActiontypes.FETCH_COLLECTIONS_SUCCESS: 
            return {
                ...state,
                collections: action.payload
            }
        case shopActiontypes.FETCH_COLLECTIONS_FAILURE: 
            return {
                ...state,
                errorMessage: action.payload
            }
        default:
            return state;
    }
}

export default shopReducer