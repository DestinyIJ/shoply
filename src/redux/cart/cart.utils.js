export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    )
    if(existingCartItem) {
        return cartItems.map(cartItem => (
            cartItem.id === cartItemToAdd.id
            ? {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
        ))
    }
    return [...cartItems, {...cartItemToAdd, quantity:1}]
}

export const reduceCartItemCount = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    )
    if(existingCartItem) {
        const newCartItems = cartItems.map(cartItem => (
            cartItem.id === cartItemToRemove.id
            ? (
                cartItem.quantity === 1 
                ? null
                : {...cartItem, quantity: cartItem.quantity - 1}
            )
            
            : cartItem
        ))

        return newCartItems.filter(item => item !== null)
    }
    return cartItems !== [] ? cartItems : null
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    )
    if(existingCartItem) {
        return cartItems.filter(cartItem => cartItem !== existingCartItem)
    }
    return cartItems 
}