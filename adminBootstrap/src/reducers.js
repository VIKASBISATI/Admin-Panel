import { combineReducers } from 'redux';
import {loginReducers} from './reducers/loginReducers';
import dashboardReducers from './reducers/dashboardReducers'
const allReducers = combineReducers({
    loginReducers,
    dashboardReducers
})
export default allReducers;