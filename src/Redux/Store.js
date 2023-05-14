import {applyMiddleware, combineReducers, legacy_createStore} from "redux"
import thunk from "redux-thunk";
import authReducer from "./Auth/Reducer";
import customerProductReducer from "./Customers/Product/Reducer";
import productReducer from "./Admin/Product/Reducer";
import cartReducer from "./Customers/Cart/Reducer";




const rootReducers=combineReducers({

    auth:authReducer,
    customersProduct:customerProductReducer,
    adminsProduct:productReducer,
    cart:cartReducer

});

export const store = legacy_createStore(rootReducers,applyMiddleware(thunk))