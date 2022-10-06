import { cartActionTypes } from "./cart.types";

export const toggleCartHidden = () => (
    {
        type: cartActionTypes.TOGGLE_CART_HIDDEN
    }
)

export const addCartItem = (item) => (
    {
        type: cartActionTypes.ADD_CART_ITEM,
        payload: item
    }
)

export const reduceCartItemCount = (item) => (
    {
        type: cartActionTypes.REDUCE_CART_ITEM_COUNT,
        payload: item
    }
)

export const removeCartItem = (item) => (
    {
        type: cartActionTypes.REMOVE_CART_ITEM,
        payload: item
    }
)
