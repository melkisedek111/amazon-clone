import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
	[selectCart],
	(cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
	[selectCart],
	(cart) => cart.cartItems.length
);

export const selectTotalCartItems = createSelector([selectCart], (cart) =>
	cart.cartItems.reduce((total, { price }) => total + price, 0)
);
