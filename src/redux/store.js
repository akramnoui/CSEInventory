import {createStore , applyMiddleware } from 'redux'
import {provider} from 'react-redux'
import reducer from './reducer'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage';


const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
  }
  
  const persistedReducer = persistReducer(persistConfig, reducer)


const store = createStore(persistedReducer ,  applyMiddleware(thunk)) ; 
 const persistor = persistStore(store)

export  {store , persistor} ; 