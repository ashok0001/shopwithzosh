import { CREATE_PAYMENT_FAILURE, CREATE_PAYMENT_REQUEST, CREATE_PAYMENT_SUCCESS } from "./ActionType";

 const initialState = {};
  
 // Payment reducer to handle creating a payment
 export const paymentReducer = (state = initialState, action) => {
   switch (action.type) {
     case CREATE_PAYMENT_REQUEST:
       return {
         loading: true,
       };
     case CREATE_PAYMENT_SUCCESS:
       return {
         loading: false,
         success: true,
         paymentResult: action.payload,
       };
     case CREATE_PAYMENT_FAILURE:
       return {
         loading: false,
         error: action.payload,
       };
     default:
       return state;
   }
 };