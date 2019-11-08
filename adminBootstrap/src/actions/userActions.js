import { adminLogin } from '../services/adminServices';
import { LOGIN_FAILURE, LOGIN_SUCCESS,LOGIN_REQUEST } from '../constants/actionTypes'
const userActions = {

 login(data) {
    console.log("dtaakhdkhakfhjkajfkue",data);
    return function(dispatch){
        dispatch(request(data));
        adminLogin(data)
        .then(data => {
            console.log(";lgjkjgkvhf",data.data.id); 
            localStorage.setItem('token',data.data.id)         
            dispatch(success(data));
            // this.props.history.push('/dashboard')
            // window.location.href="/dashboard"
        }).catch(err => {
            dispatch(failure(err.toString()))
        })
    }
    function request(data) { return { type:LOGIN_REQUEST, data } }

    function success(data) {
        return {
            type: LOGIN_SUCCESS,
            data
        }
    }
    function failure(err) {
        return {
            type: LOGIN_FAILURE,
            err
        }
    }
}
}
export default userActions