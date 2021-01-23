import CartActionTypes from "./cartTypes";
import { addToCartItem, removeItemFromCart } from "./cartUtils";

const INITIAL_STATE = {
	cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case CartActionTypes.ADD_TO_CART:
			return {
				...state,
				cartItems: addToCartItem(state.cartItems, action.payload),
            };
        case CartActionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }
		default:
			return {
				...state,
			};
	}
};

export default cartReducer;