// import { LOGIN_FAIL, LOGIN_REQUEST,LOGIN_SUCCESS } from '../constants/page';


// export const userReducer = (state = { user: {} }, action) => {
//     switch (action.type) {

//       case LOGIN_REQUEST:
//         return {
//           isAuthenticated: false,
//         };
        
//       case LOGIN_SUCCESS:
//         return {
//           ...state,
//           isAuthenticated: true,
//           user: action.payload,
//         };
  
      
//       case LOGIN_FAIL:
//         return {
//           ...state,
//           isAuthenticated: false,
//           user: null,
//           error: action.payload,
//         };
  
  
//       default:
//         return state;
//     }
//   };