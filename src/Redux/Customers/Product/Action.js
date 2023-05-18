import axios from "axios";

import {
  FIND_PRODUCTS_BY_CATEGORY_REQUEST,
  FIND_PRODUCTS_BY_CATEGORY_SUCCESS,
  FIND_PRODUCTS_BY_CATEGORY_FAILURE,
  FIND_PRODUCT_BY_ID_REQUEST,
  FIND_PRODUCT_BY_ID_SUCCESS,
  FIND_PRODUCT_BY_ID_FAILURE,
} from "./ActionType";
import api, { API_BASE_URL } from "../../../config/api";

const category = "pant";
const colors = [].join(",");
const sizes = ["S", "M"].join(",");
const minPrice = 100;
const maxPrice = 5000;
const minDiscount = 10;
const sort = "price_high";
const pageNumber = 3;
const pageSize = 4;

// const url = `/api/products?color=${colors}&size=${sizes}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&category=${category}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}`;

export const findProducts = (reqData) => async (dispatch) => {
  const {colors,sizes,minPrice,maxPrice,minDiscount,category,sort,pageNumber,pageSize}=reqData
  console.log(colors,sizes,minPrice,maxPrice,minDiscount,category,sort,pageNumber,pageSize)
  try {
    dispatch({ type: FIND_PRODUCTS_BY_CATEGORY_REQUEST });

    const { data } = await api.get(
      `/api/products?color=${colors}&size=${sizes}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&category=${category}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}`
    );

    console.log("get product by category - ", data);
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
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.get(
      `${API_BASE_URL}/api/products/id/${reqData.productId}`,
      config
    );
    console.log("products by  id : ", data);
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
