import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers'
const store = createStore(
    rootReducer,
     applyMiddleware(createLogger(),thunkMiddleware)
)
export default store; 