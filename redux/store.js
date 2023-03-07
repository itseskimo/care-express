"use client"

import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import { userReducer, addressReducer , ordersReducer,dashboardAccountReducer,socialReducer } from './reducers/userReducer';

const reducer = combineReducers({
    user: userReducer,
    address:addressReducer,
    orders:ordersReducer,
    account:dashboardAccountReducer,
    social:socialReducer,
})


const middleware = [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;