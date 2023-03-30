import { createStor, applyMiddleware } from "redux";
import composeWithDevTools from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import authReducer from './Reducers'



export const Store = createStor(authReducer, composeWithDevTools(applyMiddleware(thunk)))