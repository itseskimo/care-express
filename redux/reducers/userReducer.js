"use client"
import {GET_SOCIAL_LOGIN_SUCCESS, LOGIN_FAIL,LOGIN_SUCCESS ,REGISTER_USER_SUCCESS,REGISTER_USER_FAIL,SOCIAL_LOGIN_SUCCESS, SOCIAL_LOGIN_FAIL, GET_SOCIAL_LOGIN_FAIL, CLEAR_ERRORS,LOGOUT_SUCCESS } from '../constants/page';

const initialState = {
  loginInfo:{},
  registerInfo:{},
  social:{},
  socialId:{},
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {

      case LOGIN_SUCCESS:
        return {
          ...state,
          loginInfo: action.payload,
        };

      case REGISTER_USER_SUCCESS:
        return {
          ...state,
          registerInfo: action.payload,
        };
      
      case LOGIN_FAIL:
      case REGISTER_USER_FAIL:
        return {
          ...state,
          error: action.payload,
        };

      case LOGOUT_SUCCESS:
      return {
        ...state,
        ...initialState
      };
  
      case GET_SOCIAL_LOGIN_SUCCESS:
        return {
          ...state,
          social: action.payload,
        };

      case SOCIAL_LOGIN_SUCCESS:
         return {
           ...state,
           socialId: action.payload,
         };

      case SOCIAL_LOGIN_FAIL:
      case GET_SOCIAL_LOGIN_FAIL:
         return {
           ...state,
           error: action.payload,
         };

      case CLEAR_ERRORS:
      return {
        ...state,
        error: null,

      };
  
      default:
        return state;
    }
  };




  