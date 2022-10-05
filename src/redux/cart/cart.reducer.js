import { cartActionTypes } from "./cart.types";
import { addItemToCart, removeItemFromCart } from "./cart.utils";

const DEFAULT_STATE = {
    hidden : true,
    cartItems: []
}

const cartReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case cartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden : !state.hidden  
            }
        case cartActionTypes.ADD_CART_ITEM:
            return {
                ...state,
                cartItems : addItemToCart(state.cartItems, action.payload)
            }
        case cartActionTypes.REMOVE_CART_ITEM:
            return {
                ...state,
                cartItems : removeItemFromCart(state.cartItems, action.payload)
            }
    
        default:
            return state;
    }
}

export default cartReducer