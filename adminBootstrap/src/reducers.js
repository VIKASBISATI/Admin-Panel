import { combineReducers } from 'redux';
import {loginReducers} from './reducers/loginReducers';
import dashboardReducers from './reducers/dashboardReducers';
import questionAnswersReducers from './reducers/questionAnswersReducers';
import paymentReducers from './reducers/paymentReducers';
import orderCompleteReducers from './reducers/orderCompleteReducers';
import questionAprrovalReducers from './reducers/questionAprrovalReducers';
import questionRejectReducers from './reducers/questionRejectReducers'
const allReducers = combineReducers({
    loginReducers,
    dashboardReducers,
    paymentReducers,
    questionAnswersReducers,
    orderCompleteReducers,
    questionAprrovalReducers,
    questionRejectReducers
})
export default allReducers;