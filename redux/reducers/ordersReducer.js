"use client"
import { COMPLETED_ORDERS_SUCCESS,COMPLETED_ORDERS_FAIL, ONGOING_ORDERS_SUCCESS, ONGOING_ORDERS_FAIL,GET_ORDER_SUCCESS, GET_ORDER_FAIL, GET_SERVICE_SUCCESS,GET_SERVICE_FAIL,ADD_ORDER_SUCCESS,ADD_ORDER_FAIL} from '../constants/page';

const initialState = {
    orderHistory:[],
    orderId:{},
    addedOrder:{},
    services:[],
  };

export const ordersReducer = (state = initialState, action) => {
    switch (action.type) {
  
      case COMPLETED_ORDERS_SUCCESS:
      case ONGOING_ORDERS_SUCCESS:  
      return {
        ...state,
        orderHistory: action.payload,
      };

      case GET_ORDER_SUCCESS: 
      return {
        ...state,
        orderId: action.payload,
      };


      case ADD_ORDER_SUCCESS:
      return {
        ...state,
        addedOrder: action.payload,
      }; 
     
      case GET_SERVICE_SUCCESS:
      return {
        ...state,
        services: action.payload,
      };
  
      case COMPLETED_ORDERS_FAIL:
      case ONGOING_ORDERS_FAIL:  
      case GET_ORDER_FAIL: 
      case ADD_ORDER_FAIL: 
      case GET_SERVICE_FAIL:
      return {
        ...state,
        error: action.payload,
      };
  
  
      default:
        return state;
    }
  };