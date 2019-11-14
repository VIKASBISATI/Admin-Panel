import axios from 'axios';
import { authHeader } from '../helpers/auth-header'
const BASE_URL = "http://fundoonotes.incubation.bridgelabz.com/api";
export function adminLogin(data) {
    return axios.post(BASE_URL + '/user/adminLogin', data).then(res => {
        localStorage.setItem('token', res.data.id)
    })
}
export function getAdminUsersList() {
    return axios.get(BASE_URL + '/user/getAdminUserList', {
        headers: authHeader()
    }).then(res => {
        console.log("response in get users list", res);
        return res;
    })
}
export function userService() {
    return axios.get(BASE_URL + '/user/service', {
        headers: authHeader()
    }).then(res => {
        console.log("response in get user services list", res);
        return res;
    })
}

export function getAllUnApprovedList() {
    return axios.get(BASE_URL + '/questionAndAnswerNotes/getUnApprovedAnswer', {
        headers: authHeader()
    }).then(res => {
        console.log("response in get user services list", res.data.data);
        return res.data.data;
    })
}
export function getUsersCartList() {
    return axios.get(BASE_URL + '/productcarts/userCartList', {
        headers: authHeader()
    }).then(res => {
        console.log("response in get user cart list", res.data.data);
        return res.data.data;
    })
}

export function completeUserOrder(data) {
    return axios.post(BASE_URL + '/productcarts/adminCompleteOrder',data, {
        headers: authHeader()
    }).then(res => {
        console.log("response in admin complete orde", res);
        return res;
    })
}
export function rejectUserOrder(data) {
    return axios.post(BASE_URL + '/productcarts/adminCancelOrder',data, {
        headers: authHeader()
    }).then(res => {
        console.log("response in admin complete orde", res);
        return res;
    })
}
