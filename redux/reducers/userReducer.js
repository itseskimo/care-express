"use client"
import { LOGIN_FAIL, LOGIN_REQUEST,LOGIN_SUCCESS ,REGISTER_USER_REQUEST,REGISTER_USER_SUCCESS,REGISTER_USER_FAIL,SOCIAL_LOGIN_REQUEST, SOCIAL_LOGIN_SUCCESS, SOCIAL_LOGIN_FAIL} from '../constants/page';


export const userReducer = (state = { user: {} }, action) => {
    switch (action.type) {

      case LOGIN_REQUEST:
      case REGISTER_USER_REQUEST:
        return {
          isAuthenticated: false,
        };
        
      case LOGIN_SUCCESS:
      case REGISTER_USER_SUCCESS:
        return {
          ...state,
          isAuthenticated: true,
          user: action.payload,
        };
  
      
      case LOGIN_FAIL:
      case REGISTER_USER_FAIL:
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