import { combineReducers } from 'redux';
import {loginReducers} from './reducers/loginReducers';
import dashboardReducers from './reducers/dashboardReducers';
import questionAnswersReducers from './reducers/questionAnswersReducers';
import paymentReducers from './reducers/paymentReducers'
const allReducers = combineReducers({
    loginReducers,
    dashboardReducers,
    paymentReducers,
    questionAnswersReducers
    

})
export default allReducers;