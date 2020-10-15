// action types
import {fetchActions} from '../api'
export const BOOK_ITEM = 'BOOK_ITEM';
export const FETCH_ACTIONS_SENT = 'FETCH_ACTIONS_SENT';
export const RECEIVED_ACTIONS = 'RECEIVED_ACTIONS';
export const REQUEST_REJECTED = ' REQUEST_REJECTED';


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
    try {
      const Actions = await fetchActions();
      dispatch(ReceiveActions(Actions))
      console.log(' the following are action ' + Actions)

    } catch (err) {
      dispatch(RequestRejected(err.message))
    }
  }
  