"use client"
import { GET_ACCOUNT_SUCCESS,UPDATE_ACCOUNT_SUCCESS, RESET_UPDATED_USER_SUCCESS} from '../constants/page';


 const initialState = {
    getUser: {},
    updateUser: {},
 };

  export const accountReducer = (state = initialState , action) => {
    switch (action.type) {

      case GET_ACCOUNT_SUCCESS:
      return {
        ...state,
        getUser : action.payload
      } 

      case UPDATE_ACCOUNT_SUCCESS:
      return {
        ...state,
        updateUser : action.payload
      }

      case RESET_UPDATED_USER_SUCCESS:
      return {
        ...state,
        updateUser : null
      }

      default:
      return state;
    }
  };