import CartActionTypes from "./cartTypes";

export const addItemToCart = (item) => ({
	type: CartActionTypes.ADD_TO_CART,
	payload: item,
});

export const removeItemFromCart = (index) => ({
	type: CartActionTypes.REMOVE_FROM_CART,
	payload: index,
});
