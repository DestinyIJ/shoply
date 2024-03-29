import { combineReducers } from "@reduxjs/toolkit"
import userReducer from "./user/user.reducer"
import cartReducer from "./cart/cart.reducer"
import shopReducer from "./shop/shop.reducer"
import directoryReducer from "./directory/directory.reducer"
import { persistReducer} from "redux-persist"
import storage from "redux-persist/lib/storage"

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart', 'shop', 'directory']
}

const rootReducer = combineReducers ({
    user: userReducer,
    cart: cartReducer,
    shop: shopReducer,
    directory: directoryReducer
})

export default persistReducer(persistConfig, rootReducer)
