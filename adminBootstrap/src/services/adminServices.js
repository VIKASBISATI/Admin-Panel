import axios from 'axios';
const BASE_URL = "http://fundoonotes.incubation.bridgelabz.com/api";
export function adminLogin(data) {
    return axios.post(BASE_URL + '/user/adminLogin', data)
}
export function getAdminUsersList() {
    console.log("local storage token",localStorage.getItem('token'));
    return axios.get(BASE_URL + '/user/getAdminUserList', {
    headers: {
        Authorization: localStorage.getItem('token')
    }
    }).then(res=>{
        console.log("response in get users list",res);
        return res;
    })
}
export function userService() {
    console.log("local storage token",localStorage.getItem('token'));
    return axios.get(BASE_URL + '/user/service', {
    headers: {
        Authorization: localStorage.getItem('token')
    }
    }).then(res=>{
        console.log("response in get user services list",res);
        return res;
    })
}
