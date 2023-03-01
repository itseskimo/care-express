"use client"

import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import { userReducer, addressReducer } from './reducers/userReducer';

const reducer = combineReducers({
    user: userReducer,
    address:addressReducer,
})


const middleware = [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;