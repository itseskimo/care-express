"use client"
import axios from 'axios';
import { LOGIN_FAIL, LOGIN_REQUEST,LOGIN_SUCCESS,REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL, SOCIAL_LOGIN_REQUEST, SOCIAL_LOGIN_SUCCESS, SOCIAL_LOGIN_FAIL } from '../constants/page';

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



  export const register = (userData) => async (dispatch) => {

    try {
      dispatch({ type: REGISTER_USER_REQUEST });
      const config = { headers: { "Content-Type": "application/json" } };
  
      const { data } = await axios.post('https://care-express-api.dthree.in/api/auth/register', userData, config);
console.log(data)
      dispatch({ type: REGISTER_USER_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: REGISTER_USER_FAIL,
        payload: error.response.data.message,
      });
    }
  };


// export const socialLogin = () => async (dispatch) => {

//   try {
//     dispatch({ type: SOCIAL_LOGIN_REQUEST });

//     const { data } = await axios.get('https://care-express-api.dthree.in/api/auth/socialLogin');
//     console.log(data)

//     dispatch({ type: SOCIAL_LOGIN_SUCCESS, payload: data.user });
//   } catch (error) {
//     dispatch({ type: SOCIAL_LOGIN_FAIL, payload: error.response.data.message });
//   }
// };

export const socialLogin = () => async (dispatch) => {

  try {
    dispatch({ type: SOCIAL_LOGIN_REQUEST });

    const { data } = await axios.post('https://care-express-api.dthree.in/api/auth/socialLogin');
    console.log(data)

    dispatch({ type: SOCIAL_LOGIN_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: SOCIAL_LOGIN_FAIL, payload: error.response.data.message });
  }
};









  
  export default login;

  
