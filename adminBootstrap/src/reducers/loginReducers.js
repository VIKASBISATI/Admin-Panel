// import { LOGIN_FAILURE, LOGIN_SUCCESS } from '../constants/actionTypes';
// let user = JSON.parse(localStorage.getItem('user'));
// const initialState = user ? { loggedIn: true, user } : {};

// export function UserLogin(state = initialState, action) {
// // export default (state = {
// //     isLogin: false,
// //     isLoginFail: false
// // }, action) => {
//     switch (action.type) {
//         case LOGIN_SUCCESS: return {
//             ...state,
//             isLogin: true,
//         }
//         case LOGIN_FAILURE: return {
//             ...state,
//             isLogin: false
//         }
//         default: return {
//             state
//         }
    
// }
// }

import {LOGIN_SUCCESS, LOGIN_FAILURE} from '../constants/actionTypes';
let user = JSON.parse(localStorage.getItem('data'));
const initialState = user ? { loggedIn: true, user } : {};

export function loginReducers(state = initialState, action) {
switch (action.type) {
case LOGIN_SUCCESS:
return {
loggedIn: true,
user: action.data
};
case LOGIN_FAILURE:
return {};

default:
return state
}
}
