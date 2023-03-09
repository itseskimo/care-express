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
  GET_ACCOUNT_FAIL,GET_ACCOUNT_REQUEST,GET_ACCOUNT_SUCCESS,
  UPDATE_ACCOUNT_REQUEST,UPDATE_ACCOUNT_SUCCESS,UPDATE_ACCOUNT_FAIL,
  UPDATE_ADDRESS_REQUEST,UPDATE_ADDRESS_SUCCESS,UPDATE_ADDRESS_FAIL,
  GET_SERVICE_SUCCESS,GET_SERVICE_FAIL,GET_SERVICE_REQUEST,
  GET_SOCIAL_LOGIN_REQUEST,GET_SOCIAL_LOGIN_SUCCESS,GET_SOCIAL_LOGIN_FAIL,
  ADD_ORDER_REQUEST,ADD_ORDER_SUCCESS,ADD_ORDER_FAIL
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
      dispatch({ type: REGISTER_USER_FAIL,payload: error.response.data.message});
    }
  };


export const socialLogin = (code,login_type) => async (dispatch) => {

  try {
    dispatch({ type: SOCIAL_LOGIN_REQUEST });

    const config = { headers: { "Content-Type": "application/json"} };

    const { data } = await axios.post('https://care-express-api.dthree.in/api/auth/socialLogin',{ code,  login_type }, config);

    dispatch({ type: SOCIAL_LOGIN_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: SOCIAL_LOGIN_FAIL, payload: error.response.data.message });
  }
};




export const getSocialLogin = () => async (dispatch) => {

  try {
    dispatch({ type: GET_SOCIAL_LOGIN_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.get('https://care-express-api.dthree.in/api/auth/getSocialLogin', config);

    dispatch({ type: GET_SOCIAL_LOGIN_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_SOCIAL_LOGIN_FAIL, payload: error.response.data.message });
  }
};

export const postAddress = (addressData ,token) => async (dispatch) => {
  try {
    dispatch({ type: POST_ADDRESS_REQUEST });

    const config = { headers: { "Content-Type": "application/json" , 'Authorization': `Bearer ${token}`} };

    const { data } = await axios.post('https://care-express-api.dthree.in/api/customer/address', addressData , config);

    dispatch({ type: POST_ADDRESS_SUCCESS, payload:Object.fromEntries(addressData)  });
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

    dispatch({ type: DELETE_ADDRESS_SUCCESS, payload: id });
  } catch (error) {
    dispatch({
      type: DELETE_ADDRESS_FAIL,
      payload: error.response.data.message,
    });
  }
};


export const updateAddress = (form,token) => async (dispatch) => {

  try {

    dispatch({ type: UPDATE_ADDRESS_REQUEST });
    const config = { headers: { "Content-Type": "application/json" , 'Authorization': `Bearer ${token}`} };

    
    const { data } = await axios.patch('https://care-express-api.dthree.in/api/customer/address',form, config);

    dispatch({ type: UPDATE_ADDRESS_SUCCESS, payload: Object.fromEntries(form) });
  } catch (error) {

    dispatch({ type: UPDATE_ADDRESS_FAIL, payload: error.response.data.message });
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

export const postOrder = (orderData , token) => async (dispatch) => {
  try {
    
    dispatch({ type: ADD_ORDER_REQUEST });
    const config = { headers: { "Content-Type": "application/json" , 'Authorization': `Bearer ${token}`} };

    const { data } = await axios.post('https://care-express-api.dthree.in/api/order/add_order',orderData, config);

    dispatch({ type: ADD_ORDER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ADD_ORDER_FAIL, payload: error.response.data.message });
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

    dispatch({ type: GET_ACCOUNT_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({ type: GET_ACCOUNT_FAIL, payload: error.response.data.message });
  }
};



export const updateDashboardAccountDetails = (form,token) => async (dispatch) => {
  try {

    dispatch({ type: UPDATE_ACCOUNT_REQUEST });
    const config = { headers: { "Content-Type": "application/json" , 'Authorization': `Bearer ${token}`} };

    const { data } = await axios.patch('https://care-express-api.dthree.in/api/customer/account',form, config);

    dispatch({ type: UPDATE_ACCOUNT_SUCCESS, payload: form });
  } catch (error) {
    dispatch({ type: UPDATE_ACCOUNT_FAIL, payload: error.response.data.message });
  }
};

export const getServicePricing = () => async (dispatch) => {

  try {
    dispatch({ type: GET_SERVICE_REQUEST });
    const config = { headers: { "Content-Type": "application/json"} };

    const { data } = await axios.get('https://care-express-api.dthree.in/api/pricing/nanny', config);

    dispatch({ type: GET_SERVICE_SUCCESS, payload: data.pricing });
  } catch (error) {
    dispatch({ type: GET_SERVICE_FAIL, payload: error.response.data.message });
  }
};