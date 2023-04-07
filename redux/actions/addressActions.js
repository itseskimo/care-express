"use client"
import axios from 'axios';
import { 
  POST_ADDRESS_REQUEST,POST_ADDRESS_SUCCESS,POST_ADDRESS_FAIL, 
  GET_ADDRESS_REQUEST, GET_ADDRESS_SUCCESS, GET_ADDRESS_FAIL, 
  DELETE_ADDRESS_REQUEST, DELETE_ADDRESS_SUCCESS, DELETE_ADDRESS_FAIL,
  UPDATE_ADDRESS_REQUEST,UPDATE_ADDRESS_SUCCESS,UPDATE_ADDRESS_FAIL,
} from '../constants/page';



export const postAddress = (addressData ,token) => async (dispatch) => {
    try {
      dispatch({ type: POST_ADDRESS_REQUEST });
  
      const config = { headers: { "Content-Type": "application/json" , 'Authorization': `Bearer ${token}`} };
  
      const { data } = await axios.post('https://care-express-api.dthree.in/api/customer/address', addressData , config);
  
      addressData.set("_id", data.address_id)
      dispatch({ type: POST_ADDRESS_SUCCESS, payload:Object.fromEntries(addressData) });
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
  
  