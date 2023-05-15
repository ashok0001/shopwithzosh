import axios from 'axios';
import { API_BASE_URL } from '../../../config/api';

// Action Types
export const GET_ORDERS_REQUEST = 'GET_ORDERS_REQUEST';
export const GET_ORDERS_SUCCESS = 'GET_ORDERS_SUCCESS';
export const GET_ORDERS_FAILURE = 'GET_ORDERS_FAILURE';

// Actions
export const getOrders = (reqData) => {
    console.log("get all orders ",reqData)
  return async (dispatch) => {
    dispatch(getOrdersRequest());
    try {
        const config = {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${reqData.jwt}`,
            },
          };
      const response = await axios.get(`${API_BASE_URL}/api/orders/`,config);
      console.log("get all orders ", response.data)
      dispatch(getOrdersSuccess(response.data));
    } catch (error) {
        console.log("catch error ",error)
      dispatch(getOrdersFailure(error.message));
    }
  };
};

export const getOrdersRequest = () => {
  return {
    type: GET_ORDERS_REQUEST,
  };
};

export const getOrdersSuccess = (orders) => {
  return {
    type: GET_ORDERS_SUCCESS,
    payload: orders,
  };
};

export const getOrdersFailure = (error) => {
  return {
    type: GET_ORDERS_FAILURE,
    payload: error,
  };
};

// Reducer
const initialState = {
  loading: false,
  orders: [],
  error: '',
};

const adminOrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_ORDERS_SUCCESS:
      return {
        loading: false,
        orders: action.payload,
        error: '',
      };
    case GET_ORDERS_FAILURE:
      return {
        loading: false,
        orders: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default adminOrderReducer;
