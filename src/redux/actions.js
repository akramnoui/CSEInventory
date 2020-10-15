// action types

export const BOOK_ITEM = 'BOOK_ITEM';
export const FETCH_ACTIONS = 'FETCH_ACTIONS';
export const RECEIVE_ACTIONS = 'RECEIVE_ACTIONS'


 //action creators 

export const BookItem = update => ({

    type: BOOK_ITEM , 
    payload: update , 


})
export const FetchActions =  () => ({

    type: FETCH_ACTIONS , 
    payload : {} , 
})
export const ReceiveActions =  (json) => ({

    type: RECEIVE_ACTIONS , 
    payload :json
})