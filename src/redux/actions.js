// action types
import {fetchActions , fetchItems , login} from '../api'
export const BOOK_ITEM = 'BOOK_ITEM';
export const FETCH_ACTIONS_SENT = 'FETCH_ACTIONS_SENT';
export const REQUEST_REJECTED = ' REQUEST_REJECTED';
export const RECEIVED_ACTIONS = 'RECEIVED_ACTIONS';
export const RECEIVED_ITEMS = 'RECEIVED_ITEMS';
export const LOGIN_SENT = 'LOGIN_SENT';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILED = 'LOGIN_FAILED'





 //action creators 

export const BookItem = update => ({

    type: BOOK_ITEM , 
    payload: update , 


})
export const FetchActionsSent =  () => ({

    type: FETCH_ACTIONS_SENT , 
    payload : {} , 
})
export const ReceiveActions =  (action) => ({

    type: RECEIVED_ACTIONS , 
    payload : action
})
export const RequestRejected = (message) => ({

    type: REQUEST_REJECTED , 
    payload : message
})








// async action creator 
export const FetchActions = () => async dispatch => {
    dispatch({type: FETCH_ACTIONS_SENT})
      const Actions = await fetchActions();
      dispatch(ReceiveActions(Actions))
  }
  export const FetchItems = () => async dispatch => {
      dispatch({type: FETCH_ACTIONS_SENT})
      const Items = await fetchItems();
      dispatch({type : RECEIVED_ITEMS , payload : Items})
  }
  export const Login = (email , password) => async dispatch =>{
      try{
      dispatch({type: LOGIN_SENT });
      const accessToken = await login(email , password);
      dispatch({type: LOGIN_SUCCESS , payload: accessToken })
      }catch(err){
         dispatch({type: LOGIN_FAILED , payload: err.message})
      }

  }
  