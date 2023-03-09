"use client"
import { LOGIN_FAIL, LOGIN_REQUEST,LOGIN_SUCCESS ,REGISTER_USER_REQUEST,REGISTER_USER_SUCCESS,REGISTER_USER_FAIL,SOCIAL_LOGIN_REQUEST, SOCIAL_LOGIN_SUCCESS, SOCIAL_LOGIN_FAIL,
  POST_ADDRESS_REQUEST,POST_ADDRESS_SUCCESS,POST_ADDRESS_FAIL,GET_ADDRESS_REQUEST, GET_ADDRESS_SUCCESS, GET_ADDRESS_FAIL,
  COMPLETED_ORDERS_REQUEST,COMPLETED_ORDERS_SUCCESS,COMPLETED_ORDERS_FAIL, DELETE_ADDRESS_REQUEST, DELETE_ADDRESS_SUCCESS, DELETE_ADDRESS_FAIL,ONGOING_ORDERS_REQUEST, ONGOING_ORDERS_SUCCESS, ONGOING_ORDERS_FAIL,GET_ORDER_REQUEST ,GET_ORDER_SUCCESS, GET_ORDER_FAIL, GET_ACCOUNT_FAIL, GET_ACCOUNT_SUCCESS, GET_ACCOUNT_REQUEST,
UPDATE_ACCOUNT_REQUEST,UPDATE_ACCOUNT_SUCCESS,UPDATE_ACCOUNT_FAIL,  UPDATE_ADDRESS_REQUEST,UPDATE_ADDRESS_SUCCESS,UPDATE_ADDRESS_FAIL,  GET_SERVICE_SUCCESS,GET_SERVICE_FAIL,GET_SERVICE_REQUEST,  GET_SOCIAL_LOGIN_REQUEST,GET_SOCIAL_LOGIN_SUCCESS,GET_SOCIAL_LOGIN_FAIL,ADD_ORDER_REQUEST,ADD_ORDER_SUCCESS,ADD_ORDER_FAIL




} from '../constants/page';


export const userReducer = (state = { user: {} }, action) => {
    switch (action.type) {

      case LOGIN_REQUEST:
      case REGISTER_USER_REQUEST:
      // case SOCIAL_LOGIN_REQUEST:
      // case GET_SOCIAL_LOGIN_REQUEST:
        return {
          isAuthenticated: false,
        };
        
      case LOGIN_SUCCESS:
      case REGISTER_USER_SUCCESS:
      // case SOCIAL_LOGIN_SUCCESS:
      // case GET_SOCIAL_LOGIN_SUCCESS:
        return {
          ...state,
          isAuthenticated: true,
          user: action.payload,
        };
  
      
      case LOGIN_FAIL:
      case REGISTER_USER_FAIL:
      // case SOCIAL_LOGIN_FAIL:
      // case GET_SOCIAL_LOGIN_FAIL:
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


  export const socialReducer = (state = { social: {} }, action) => {
    switch (action.type) {

     
      case SOCIAL_LOGIN_REQUEST:
      case GET_SOCIAL_LOGIN_REQUEST:
        return {
          isAuthenticated: false,
        };
        
   
      case SOCIAL_LOGIN_SUCCESS:
      case GET_SOCIAL_LOGIN_SUCCESS:
        return {
          ...state,
          isAuthenticated: true,
          social: action.payload,
        };
  
      
    
      case SOCIAL_LOGIN_FAIL:
      case GET_SOCIAL_LOGIN_FAIL:
        return {
          ...state,
          isAuthenticated: false,
          social: null,
          error: action.payload,
        };
  
  
      default:
        return state;
    }
  };


  export const addressReducer = (state = [] , action) => {
    switch (action.type) {

      case GET_ADDRESS_SUCCESS:
      return action.payload

      case POST_ADDRESS_SUCCESS:
      return [action.payload, ...state]

      case UPDATE_ADDRESS_SUCCESS:
      return state.map(address => (address._id === action.payload._id ? action.payload : address))

      case DELETE_ADDRESS_SUCCESS:
      return state.filter(address => address._id !== action.payload);
     
      default:
        return state;
    }
  };


  export const dashboardAccountReducer = (state = {} , action) => {
    switch (action.type) {

      case GET_ACCOUNT_SUCCESS:
      return action.payload

      case UPDATE_ACCOUNT_SUCCESS:
      return action.payload

      default:
      return state;
    }
  };


  export const ordersReducer = (state = { orders: [] }, action) => {
    switch (action.type) {

   
        case COMPLETED_ORDERS_REQUEST:
        case ONGOING_ORDERS_REQUEST: 
        case GET_ORDER_REQUEST: 
        case ADD_ORDER_REQUEST: 

        // case GET_ACCOUNT_REQUEST:
        // case UPDATE_ACCOUNT_REQUEST:
        case GET_SERVICE_REQUEST:
        return {
          isAuthenticated: false,
        };
        
      
      case  COMPLETED_ORDERS_SUCCESS:
      case ONGOING_ORDERS_SUCCESS:  
      case GET_ORDER_SUCCESS: 
      case ADD_ORDER_SUCCESS: 
      // case GET_ACCOUNT_SUCCESS:
      // case UPDATE_ACCOUNT_SUCCESS:
      case GET_SERVICE_SUCCESS:
        return {
          ...state,
          isAuthenticated: true,
          orders: action.payload,
        };
  
      
      
        case COMPLETED_ORDERS_FAIL:
        case ONGOING_ORDERS_FAIL:  
        case GET_ORDER_FAIL: 
        case ADD_ORDER_FAIL: 
        // case GET_ACCOUNT_FAIL:
        // case UPDATE_ACCOUNT_FAIL:
        case GET_SERVICE_FAIL:
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