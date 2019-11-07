import { combineReducers } from 'redux';
import loginReducers from './reducers/loginReducers';
const allReducers = combineReducers({
    loginReducers
})
export default allReducers;