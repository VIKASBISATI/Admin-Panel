import { LOGIN_ERROR, LOGIN_PENDING, LOGIN_SUCCESS } from '../constants/actionTypes';
export default (state = {
    LOGIN_ERROR: null,
    LOGIN_PENDING: false,
    LOGIN_SUCCESS: false
}, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS: return {

        }
        case LOGIN_PENDING: return {

        }
        case LOGIN_ERROR: return {

        }
        default: return {
            state
        }
    }
}