import { combineReducers } from "redux";
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import cartReducer from "./cart/cartReducer";
import shopReducer from "./shop/shopReducer";
import userReducer from "./user/userReducer";


const persisConfig = {
    key: 'root',
    storage,
    white: ['cart']
};

const rootReducer = combineReducers({
    cart: cartReducer,
    shop: shopReducer,
    user: userReducer
});

export default persistReducer(persisConfig, rootReducer)

