import ShopActionTypes from "./shopTypes";
import SHOP_DATA from "./SHOP_DATA";
const INITIAL_STATE = {
	data: SHOP_DATA,
};

const shopReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ShopActionTypes.FETCH_SHOP_DATA:
			return {
				...state,
				data: action.payload,
			};
		default:
			return {
				...state,
			};
	}
};

export default shopReducer;
