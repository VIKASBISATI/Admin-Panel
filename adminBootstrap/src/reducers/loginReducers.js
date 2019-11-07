import { LOGIN_FAILURE, LOGIN_SUCCESS } from '../constants/actionTypes';
export default (state = {
    isLogin: false,
    isLoginFail: false
}, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS: return {
            ...state,
            isLogin: true,
        }
        case LOGIN_FAILURE: return {
            ...state,
            isLoginFail: true
        }
        default: return {
            state
        }
    }
}
