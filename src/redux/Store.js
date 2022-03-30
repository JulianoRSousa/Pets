import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import AsyncStorage from '@react-native-community/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import Reducers from './reducers/index'



const persistedReducer = persistReducer({
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['userReducer'],
    // blacklist: []
}, Reducers)
const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))
const store = createStore(persistedReducer, composedEnhancer)
let persistor = persistStore(store);

export { store, persistor };