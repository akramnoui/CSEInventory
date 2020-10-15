import {createStore } from 'redux'
import {provider} from 'react-redux'

 



const reducer = combineReducers({

})


const DEFAULT_STATE = {
    
    
    actions: { 

    } ,
    reservations : {

    } , 
    damages : {

    }
 , 


    react:{
        isFetching: false , 
    }
}


const store = createStore(reducer , DEFAULT_STATE) ; 
export default store ; 