"use client"
import axios from 'axios';
import { LOGIN_FAIL, LOGIN_REQUEST,LOGIN_SUCCESS } from '../constants/page';

 const login = (email, password) => async (dispatch) => {

    try {
      dispatch({ type: LOGIN_REQUEST });
  
    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.post( `https://care-express-api.dthree.in/api/auth/login`,{ email, password }, config);
  
      dispatch({ type: LOGIN_SUCCESS, payload:data });
    } catch (error) {
      dispatch({ type: LOGIN_FAIL, payload: error.response.data.message });
    }
  };
  
  export default login

  // "email": "sickrenders9@gmail.com",
  // "password": "careuser"
