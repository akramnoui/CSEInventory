import  {combineReducers} from 'redux'
import {BOOK_ITEM , FETCH_ACTIONS_SENT   , RECEIVED_ACTIONS, REQUEST_REJECTED } from './actions'

const merge = (prev, next) =>  Object.assign({}, prev, next)

const initialState = {
    Actions: [],
   
  };
const ActionReducer = ( state = initialState , action) => {

    switch(action.type){
        case BOOK_ITEM : 
            return null ;
        case RECEIVED_ACTIONS :
            return merge(state, {Actions: action.payload})
        case REQUEST_REJECTED:
              return merge(state, {loginErr: action.payload})
        default:
              return state



    }


}



// const userReducer = (state = {}, action) => {
//     switch (action.type) {
//       case UPDATE_USER:
//         return merge(state, action.payload)
//       case UPDATE_CONTACT:
//         return merge(state, {prevContact: action.payload})
//       case LOG_IN_FULFILLED:
//         return merge(state, {token: action.payload})
//       case LOG_IN_REJECTED:
//         return merge(state, {loginErr: action.payload})
//       default:
//         return state
//     }
//   }





const reducer = combineReducers({
    actions : ActionReducer,
  })
  export default reducer;