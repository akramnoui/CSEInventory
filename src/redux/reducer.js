import  {combineReducers} from 'redux'
import {BOOK_ITEM , FETCH_ACTIONS_SENT   , RECEIVED_ACTIONS, REQUEST_REJECTED , RECEIVED_ITEMS, LOGIN_SENT, LOGIN_SUCCESS, LOGIN_FAILED } from './actions'

const merge = (prev, next) =>  Object.assign({}, prev, next)




const Actionreducer = ( state = {} , action) => {
    switch(action.type){
        // case FETCH_ACTIONS_SENT : 
        //     return merge(state, {isFetching : true})
        case RECEIVED_ACTIONS :
            return  merge(state, {Actions: action.payload  , isFetching : false})
            
        case REQUEST_REJECTED:
              return merge(state, {loginErr: action.payload})
        default:
              return state



    }

}



const ItemsReducer = ( state = [] , action) => {
    switch(action.type){
        // case FETCH_ACTIONS_SENT : 
        //     return merge(state, {isFetchingItems : true})
        case RECEIVED_ITEMS:
            return  merge(state, {Items: action.payload  , isFetchingItems : false})
        case REQUEST_REJECTED:
              return merge(state, {loginErr: action.payload})
        default:
              return state



    }

}

const LoginReducer = ( state = [] , action) => {
    switch(action.type){
        // case FETCH_ACTIONS_SENT : 
        //     return merge(state, {isFetchingItems : true})
        case LOGIN_SUCCESS:
            return  merge(state, {accessToken: action.payload  , isLogging: false , err: null})
        case LOGIN_FAILED:
            return  merge(state , {err: {message : action.payload } })  
        default:
              return state



    }

}

const reducer = combineReducers({
    Item : ItemsReducer ,
    Action :  Actionreducer,
    Login : LoginReducer , 
   
  })
  export default reducer;