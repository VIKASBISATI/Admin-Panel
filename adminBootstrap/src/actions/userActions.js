import { adminLogin, getAllUnApprovedList, getUsersCartList } from '../services/adminServices';
import {
    LOGIN_FAILURE, LOGIN_SUCCESS, LOGIN_REQUEST, GET_QA_DATA_FAILURE, GET_QA_DATA_SUCCESS,
    GET_USER_CART_LIST_FAILURE, GET_USER_CART_LIST_SUCCESS

} from '../constants/actionTypes'
const userActions = {
    login(data) {
        console.log("dtaakhdkhakfhjkajfkue", data);
        return function (dispatch) {
            dispatch(request(data));
            adminLogin(data)
                .then(data => {
                    console.log(";lgjkjgkvhf", data.data.id);
                    localStorage.setItem('token', data.data.id)
                    dispatch(success(data));
                    // this.props.history.push('/dashboard')
                    // window.location.href="/dashboard"
                }).catch(err => {
                    dispatch(failure(err.toString()))
                })
        }
        function request(data) { return { type: LOGIN_REQUEST, data } }

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
    },
    getUnApprovedData(check) {
        return (dispatch) => {
            getAllUnApprovedList().then(res => {
                console.log("res in get unapproved list", res);
                dispatch(success(res));
            }).catch(err => {
                console.log("error in get unapproved list", err);
                dispatch(failure(err));
            })
        }
        function success(data) {
            return { type: GET_QA_DATA_SUCCESS, payload: data }
        }
        function failure(err) {
            return { type: GET_QA_DATA_FAILURE, payload: err }
        }
    },
    getPendingPaymentsData(data) {
        return (dispatch) => {
            getUsersCartList().then(res => {
                console.log("res in get usercart list", res);
                dispatch(success(res));
            }).catch(err => {
                console.log("error in get usercart list", err);
                dispatch(failure(err));
            })
        }
        function success(data) {
            console.log("data in succdess",data);
            
            return { type:GET_USER_CART_LIST_SUCCESS, payload: data }
        }
        function failure(err) {
            return { type: GET_USER_CART_LIST_FAILURE, payload: err }
        }
    },

}
export default userActions