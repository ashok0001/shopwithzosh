import {applyMiddleware, combineReducers, legacy_createStore} from "redux"
import thunk from "redux-thunk";
import authReducer from "./Auth/Reducer";
import customerProductReducer from "./Customers/Product/Reducer";
import productReducer from "./Admin/Product/Reducer";
import cartReducer from "./Customers/Cart/Reducer";
import { orderReducer } from "./Customers/Order/Reducer";




const rootReducers=combineReducers({

    auth:authReducer,
    customersProduct:customerProductReducer,
    adminsProduct:productReducer,
    cart:cartReducer,
    order:orderReducer

});

export const store = legacy_createStore(rootReducers,applyMiddleware(thunk))