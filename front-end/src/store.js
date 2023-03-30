import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import authReducer from './Reducers'



export const Store = createStore(authReducer, composeWithDevTools(applyMiddleware(thunk)))