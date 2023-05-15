import axios from 'axios';

import {
  FIND_PRODUCTS_BY_CATEGORY_REQUEST,
  FIND_PRODUCTS_BY_CATEGORY_SUCCESS,
  FIND_PRODUCTS_BY_CATEGORY_FAILURE,
  FIND_PRODUCT_BY_ID_REQUEST,
  FIND_PRODUCT_BY_ID_SUCCESS,
  FIND_PRODUCT_BY_ID_FAILURE,
} from './ActionType';
import { API_BASE_URL } from '../../../config/api';

// const jwt= localStorage.getItem("jwt");


export const findProductsByCategory = (reqData) => async (dispatch) => {
  try {
    dispatch({ type: FIND_PRODUCTS_BY_CATEGORY_REQUEST });

    const config = {
        headers: {
          Authorization: `Bearer ${reqData.jwt}`,
          "Content-Type":"application/json"
        },
      };

    const { data } = await axios.get(`${API_BASE_URL}/api/products/category?name=${reqData.categoryName}`,config);
console.log("get product by category - ",data)
    dispatch({
      type: FIND_PRODUCTS_BY_CATEGORY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FIND_PRODUCTS_BY_CATEGORY_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const findProductById = (reqData) => async (dispatch) => {
    try {
      dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST });
      const config = {
        headers: {
          Authorization: `Bearer ${reqData.jwt}`,
          "Content-Type":"application/json"
        },
      };
      const { data } = await axios.get(`${API_BASE_URL}/api/products/id/${reqData.productId}`,config);
  console.log("products by  id : ",data)
      dispatch({
        type: FIND_PRODUCT_BY_ID_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: FIND_PRODUCT_BY_ID_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };