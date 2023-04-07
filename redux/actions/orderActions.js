"use client"
import axios from 'axios';
import { 
  COMPLETED_ORDERS_REQUEST,COMPLETED_ORDERS_SUCCESS,COMPLETED_ORDERS_FAIL,
  ONGOING_ORDERS_REQUEST,ONGOING_ORDERS_SUCCESS,ONGOING_ORDERS_FAIL,
  GET_ORDER_REQUEST,GET_ORDER_SUCCESS,GET_ORDER_FAIL,
  GET_SERVICE_SUCCESS,GET_SERVICE_FAIL,GET_SERVICE_REQUEST,
  ADD_ORDER_REQUEST,ADD_ORDER_SUCCESS,ADD_ORDER_FAIL
} from '../constants/page';


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
     console.log(data)
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