import  {combineReducers} from 'redux'
import {BOOK_ITEM , FETCH_ACTIONS_SENT   , RECEIVED_ACTIONS, REQUEST_REJECTED , RECEIVED_ITEMS } from './actions'

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

const reducer = combineReducers({
    Item : ItemsReducer ,
    Action :  Actionreducer,
   
  })
  export default reducer;