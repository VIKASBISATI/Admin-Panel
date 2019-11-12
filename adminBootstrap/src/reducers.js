import { combineReducers } from 'redux';
import {loginReducers} from './reducers/loginReducers';
import dashboardReducers from './reducers/dashboardReducers';
import questionAnswersReducers from './reducers/questionAnswersReducers'
const allReducers = combineReducers({
    loginReducers,
    dashboardReducers,
    questionAnswersReducers
})
export default allReducers;