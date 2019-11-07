import { adminLogin } from '../services/adminServices';
import { LOGIN_FAILURE, LOGIN_SUCCESS } from '../constants/actionTypes'
const userActions = {
    login
}
function login(data) {
    return (dispatch) => {
        adminLogin(data).then(res => {
            console.log("res in user actions for login", res);
            dispatch(success(res));
        }).catch(err => {
            dispatch(failure(err.toString()))
        })
    }
    function success(res) {
        return {
            type: LOGIN_SUCCESS,
            res
        }
    }
    function failure(err) {
        return {
            type: LOGIN_FAILURE,
            err
        }
    }
}
export default userActions