
export const addItem = (cartItem) => {
    return {
        type: 'ADD_ITEM',
        payload: cartItem
    }
}

export const removeItem = (cartItem) => {
    return {
        type: 'REMOVE_ITEM',
        payload: cartItem
    }
}

export const addQuantity = (cartItem) => {
    return {
        type: 'ADD_QUANTITY',
        payload: cartItem
    }
}

export const removeQuantity = (cartItem) => {
    return {
        type: 'REMOVE_QUANTITY',
        payload: cartItem 
    }
}

