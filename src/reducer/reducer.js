export const initialState = {
	basket: [],
};


const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
        case 'REMOVE_FROM_BASKET':
            let newBasket = [...state.basket];
            newBasket.splice(action.index, 1)
            return {
                ...state,
                basket: newBasket
            }
        default:
            return state;
    }
}

export default reducer;
