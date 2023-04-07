"use client"
import { POST_ADDRESS_SUCCESS,GET_ADDRESS_SUCCESS,DELETE_ADDRESS_SUCCESS,UPDATE_ADDRESS_SUCCESS} from '../constants/page';

const initialState = {
    address:[],
  };

export const addressReducer = (state = initialState , action) => {
    switch (action.type) {

      case GET_ADDRESS_SUCCESS:
      return{
        ...state,
        address : action.payload
      } 

      case POST_ADDRESS_SUCCESS:
      return {
        ...state,
        address: [action.payload, ...state.address]
      } 

      case UPDATE_ADDRESS_SUCCESS:
      return {
        ...state,
        address : state.address.map(address => (address._id === action.payload._id ? action.payload : address))
      } 

      case DELETE_ADDRESS_SUCCESS:
      return {
        ...state,
        address: state.address.filter(address => address._id !== action.payload)
      }
     
      default:
        return state;
    }
  };