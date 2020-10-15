import {createStore , applyMiddleware } from 'redux'
import {provider} from 'react-redux'
import reducer from './reducer'
import thunk from 'redux-thunk'


const initialState = {
   
  };

const store = createStore(reducer ,{},  applyMiddleware(thunk)) ; 
export default store ; 