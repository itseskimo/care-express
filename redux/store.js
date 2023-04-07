"use client"

import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import { userReducer } from './reducers/userReducer';
import { addressReducer} from './reducers/addressReducer';
import { accountReducer} from './reducers/accountReducer';
import { ordersReducer} from './reducers/ordersReducer';

const reducer = combineReducers({
    user: userReducer,
    address:addressReducer,
    orders:ordersReducer,
    account:accountReducer,
})


const middleware = [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;