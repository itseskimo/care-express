"use client"
import { LOGIN_FAIL, LOGIN_REQUEST,LOGIN_SUCCESS ,REGISTER_USER_REQUEST,REGISTER_USER_SUCCESS,REGISTER_USER_FAIL,SOCIAL_LOGIN_REQUEST, SOCIAL_LOGIN_SUCCESS, SOCIAL_LOGIN_FAIL,
  POST_ADDRESS_REQUEST,POST_ADDRESS_SUCCESS,POST_ADDRESS_FAIL,GET_ADDRESS_REQUEST, GET_ADDRESS_SUCCESS, GET_ADDRESS_FAIL,
  COMPLETED_ORDERS_REQUEST,COMPLETED_ORDERS_SUCCESS,COMPLETED_ORDERS_FAIL, DELETE_ADDRESS_REQUEST, DELETE_ADDRESS_SUCCESS, DELETE_ADDRESS_FAIL,ONGOING_ORDERS_REQUEST, ONGOING_ORDERS_SUCCESS, ONGOING_ORDERS_FAIL,GET_ORDER_REQUEST ,GET_ORDER_SUCCESS, GET_ORDER_FAIL, GET_ACCOUNT_FAIL, GET_ACCOUNT_SUCCESS, GET_ACCOUNT_REQUEST,
UPDATE_ACCOUNT_REQUEST,UPDATE_ACCOUNT_SUCCESS,UPDATE_ACCOUNT_FAIL

} from '../constants/page';


export const userReducer = (state = { user: {} }, action) => {
    switch (action.type) {

      case LOGIN_REQUEST:
      case REGISTER_USER_REQUEST:
      case SOCIAL_LOGIN_REQUEST:
        return {
          isAuthenticated: false,
        };
        
      case LOGIN_SUCCESS:
      case REGISTER_USER_SUCCESS:
      case SOCIAL_LOGIN_SUCCESS:
        return {
          ...state,
          isAuthenticated: true,
          user: action.payload,
        };
  
      
      case LOGIN_FAIL:
      case REGISTER_USER_FAIL:
      case SOCIAL_LOGIN_FAIL:
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












  export const addressReducer = (state = { address: [] }, action) => {
    switch (action.type) {

      case POST_ADDRESS_REQUEST:
      case GET_ADDRESS_REQUEST:
      case DELETE_ADDRESS_REQUEST:
        return {
          isAuthenticated: false,
        };
        
      case POST_ADDRESS_SUCCESS:
      case GET_ADDRESS_SUCCESS:
      case DELETE_ADDRESS_SUCCESS:
        return {
          ...state,
          isAuthenticated: true,
          address: action.payload,
        };
  
      
      case POST_ADDRESS_FAIL:
      case GET_ADDRESS_FAIL:
      case DELETE_ADDRESS_FAIL:
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


  export const ordersReducer = (state = { orders: [] }, action) => {
    switch (action.type) {

   
        case COMPLETED_ORDERS_REQUEST:
        case ONGOING_ORDERS_REQUEST: 
        case GET_ORDER_REQUEST: 
        case GET_ACCOUNT_REQUEST:
        case UPDATE_ACCOUNT_REQUEST:

        return {
          isAuthenticated: false,
        };
        
      
      case  COMPLETED_ORDERS_SUCCESS:
      case ONGOING_ORDERS_SUCCESS:  
      case GET_ORDER_SUCCESS: 
      case GET_ACCOUNT_SUCCESS:
      case UPDATE_ACCOUNT_SUCCESS:
        return {
          ...state,
          isAuthenticated: true,
          orders: action.payload,
        };
  
      
      
        case COMPLETED_ORDERS_FAIL:
        case ONGOING_ORDERS_FAIL:  
        case GET_ORDER_FAIL: 
        case GET_ACCOUNT_FAIL:
        case UPDATE_ACCOUNT_FAIL:
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