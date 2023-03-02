"use client"
import axios from 'axios';
import { LOGIN_FAIL, LOGIN_REQUEST,LOGIN_SUCCESS,REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL, SOCIAL_LOGIN_REQUEST, SOCIAL_LOGIN_SUCCESS, SOCIAL_LOGIN_FAIL,
  POST_ADDRESS_REQUEST,POST_ADDRESS_SUCCESS,POST_ADDRESS_FAIL, 
  GET_ADDRESS_REQUEST, GET_ADDRESS_SUCCESS, GET_ADDRESS_FAIL, 
  DELETE_ADDRESS_REQUEST, DELETE_ADDRESS_SUCCESS, DELETE_ADDRESS_FAIL,
  COMPLETED_ORDERS_REQUEST,COMPLETED_ORDERS_SUCCESS,COMPLETED_ORDERS_FAIL,
  ONGOING_ORDERS_REQUEST,ONGOING_ORDERS_SUCCESS,ONGOING_ORDERS_FAIL,
  GET_ORDER_REQUEST,GET_ORDER_SUCCESS,GET_ORDER_FAIL,
  GET_ACCOUNT_FAIL,GET_ACCOUNT_REQUEST,GET_ACCOUNT_SUCCESS
} from '../constants/page';

export const login = (email, password) => async (dispatch) => {

    try {
      dispatch({ type: LOGIN_REQUEST });
  
    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.post( `https://care-express-api.dthree.in/api/auth/login`,{ email, password }, config);
      dispatch({ type: LOGIN_SUCCESS, payload:data });

    } catch (error) {
      dispatch({ type: LOGIN_FAIL, payload: error.response.data.message });
    }
  };



  export const register = (userData) => async (dispatch) => {

    try {
      dispatch({ type: REGISTER_USER_REQUEST });

      const config = { headers: { "Content-Type": "application/json" } };
  
      const { data } = await axios.post('https://care-express-api.dthree.in/api/auth/register', userData, config);
      dispatch({ type: REGISTER_USER_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: REGISTER_USER_FAIL,
        payload: error.response.data.message,
      });
    }
  };


export const socialLogin = (code,login_type) => async (dispatch) => {

  try {
    dispatch({ type: SOCIAL_LOGIN_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post('https://care-express-api.dthree.in/api/auth/socialLogin',{ code, login_type }, config);

    dispatch({ type: SOCIAL_LOGIN_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: SOCIAL_LOGIN_FAIL, payload: error.response.data.message });
  }
};

export const postAddress = (addressData ,token) => async (dispatch) => {
  try {
    dispatch({ type: POST_ADDRESS_REQUEST });

    const config = { headers: { "Content-Type": "application/json" , 'Authorization': `Bearer ${token}`} };

    const { data } = await axios.post('https://care-express-api.dthree.in/api/customer/address', addressData , config);
    console.log(data)

    dispatch({ type: POST_ADDRESS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: POST_ADDRESS_FAIL, payload: error.response.data.message });
  }
};

export const getAddresses = (token) => async (dispatch) => {

  try {
    dispatch({ type: GET_ADDRESS_REQUEST });
    const config = { headers: { "Content-Type": "application/json" , 'Authorization': `Bearer ${token}`} };

    const { data } = await axios.get('https://care-express-api.dthree.in/api/customer/addresses' , config);

    dispatch({ type: GET_ADDRESS_SUCCESS, payload: data.addresses });
  } catch (error) {
    dispatch({ type: GET_ADDRESS_FAIL, payload: error.response.data.message });
  }
};

export const deleteAddress = (id ,token) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_ADDRESS_REQUEST });
    const config = { headers: { "Content-Type": "application/json" , 'Authorization': `Bearer ${token}`}, data:{ 'address_id': `${id}`} };

    const { data } = await axios.delete(`https://care-express-api.dthree.in/api/customer/address`, config);

    dispatch({ type: DELETE_ADDRESS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: DELETE_ADDRESS_FAIL,
      payload: error.response.data.message,
    });
  }
};



export const getCompletedOrders = (token) => async (dispatch) => {
  try {
    
    dispatch({ type: COMPLETED_ORDERS_REQUEST });
    const config = { headers: { "Content-Type": "application/json" , 'Authorization': `Bearer ${token}`} };

    const { data } = await axios.get('https://care-express-api.dthree.in/api/customer/orders/completed', config);

    dispatch({ type: COMPLETED_ORDERS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: COMPLETED_ORDERS_FAIL, payload: error.response.data.message });
  }
};




export const getOngoingOrders = (token) => async (dispatch) => {
  try {
    
    dispatch({ type: ONGOING_ORDERS_REQUEST });
    const config = { headers: { "Content-Type": "application/json" , 'Authorization': `Bearer ${token}`} };

    const { data } = await axios.get('https://care-express-api.dthree.in/api/customer/orders/ongoing', config);

    dispatch({ type: ONGOING_ORDERS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ONGOING_ORDERS_FAIL, payload: error.response.data.message });
  }
};



export const getOrderById = (id, token) => async (dispatch) => {
  try {
    
    dispatch({ type: GET_ORDER_REQUEST });
    const config = { headers: { "Content-Type": "application/json" , 'Authorization': `Bearer ${token}`} };

    const { data } = await axios.get(`https://care-express-api.dthree.in/api/customer/order/${id}`, config);

    dispatch({ type: GET_ORDER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_ORDER_FAIL, payload: error.response.data.message });
  }
};

export const getDashboardAccountDetails = (token) => async (dispatch) => {
  try {

    dispatch({ type: GET_ACCOUNT_REQUEST });
    const config = { headers: { "Content-Type": "application/json" , 'Authorization': `Bearer ${token}`} };

    const { data } = await axios.get('https://care-express-api.dthree.in/api/customer/account', config);
    console.log(data)

    dispatch({ type: GET_ACCOUNT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_ACCOUNT_FAIL, payload: error.response.data.message });
  }
};