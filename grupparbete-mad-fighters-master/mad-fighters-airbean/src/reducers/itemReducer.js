let initialState = {
    order: [],
};

const itemReducer = (state = initialState, action) => {
    //Finding index of the item that matches the dispatched item using method findIndex()
    let index = state.order.findIndex(order => order.id == action.payload.id);
    //Copying current state to the variable new array
    let newArray = [...state.order];

    switch (action.type) {
        case 'ADD_ITEM':
            return {
                ...state,
                //Append
                //First spreads the data from the state and then adding the new data
                order: [...state.order, action.payload]
            }

        //Instead of using Prepend, that first adds the new data and then spreads the remaining data from the state
        /* order: [action.payload, ...state.order] */

        case 'ADD_QUANTITY':
            // Checks if the item dispatched contains the property quantity
            // Adds the property quantity and adds the value of 1
            if (!newArray[index].hasOwnProperty('quantity')) {
                newArray[index].quantity = 1
                //Else quantity is increased by 1
            } else {
                newArray[index].quantity = newArray[index].quantity + 1
            }
            return {
                ...state,
                // Updates the state from newArray 
                order: newArray,
            }

        case 'REMOVE_QUANTITY':
            // Quantity is decreased by 1
            newArray[index].quantity = newArray[index].quantity - 1
            return {
                ...state,
                // Updates the state from newArray 
                order: newArray,
            }

        case 'REMOVE_ITEM':
            // Filters state and returns a new array containing items not equal to action.payload dispatched
            const filteredOrder = state.order.filter(orderItem => orderItem !== action.payload)
            return {
                ...state,
                // Updates the state from filteredOrder
                order: filteredOrder
            }
        default:
            return state;
    }
}
export default itemReducer;
