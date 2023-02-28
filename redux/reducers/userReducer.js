"use client"
import { LOGIN_FAIL, LOGIN_REQUEST,LOGIN_SUCCESS ,REGISTER_USER_REQUEST,REGISTER_USER_SUCCESS,REGISTER_USER_FAIL,SOCIAL_LOGIN_REQUEST, SOCIAL_LOGIN_SUCCESS, SOCIAL_LOGIN_FAIL,POST_ADDRESS_REQUEST,POST_ADDRESS_SUCCESS,POST_ADDRESS_FAIL } from '../constants/page';


export const userReducer = (state = { user: {} }, action) => {
    switch (action.type) {

      case LOGIN_REQUEST:
      case REGISTER_USER_REQUEST:
      case SOCIAL_LOGIN_REQUEST:
      case POST_ADDRESS_REQUEST:
        return {
          isAuthenticated: false,
        };
        
      case LOGIN_SUCCESS:
      case REGISTER_USER_SUCCESS:
      case SOCIAL_LOGIN_SUCCESS:
      case POST_ADDRESS_SUCCESS:
        return {
          ...state,
          isAuthenticated: true,
          user: action.payload,
        };
  
      
      case LOGIN_FAIL:
      case REGISTER_USER_FAIL:
      case SOCIAL_LOGIN_FAIL:
      case POST_ADDRESS_FAIL:
        return {
          ...state,
          isAuthenticated: false,
          user: null,
          error: action.payload,
        };
  
  
      default:
        return state;
    }
  };