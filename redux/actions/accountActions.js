"use client"
import axios from 'axios';
import {  GET_ACCOUNT_FAIL,GET_ACCOUNT_REQUEST,GET_ACCOUNT_SUCCESS,
          UPDATE_ACCOUNT_REQUEST,UPDATE_ACCOUNT_SUCCESS,UPDATE_ACCOUNT_FAIL,RESET_UPDATED_USER_SUCCESS} from '../constants/page';

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
  
      dispatch({ type: UPDATE_ACCOUNT_SUCCESS, payload:data });
    } catch (error) {
      dispatch({ type: UPDATE_ACCOUNT_FAIL, payload: error.response.data.message });
    }
  };


  export const resetUpdatedUser = () => async (dispatch) => {
    dispatch({ type: RESET_UPDATED_USER_SUCCESS });
};