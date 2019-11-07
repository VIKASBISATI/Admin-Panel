import axios from 'axios';
const BASE_URL = "http://fundoonotes.incubation.bridgelabz.com/explorer/";
export function adminLogin(data) {
    return axios.post(BASE_URL + '/user/adminLogin', data).then(res => {
        console.log("res in admin login", res);
        return res;
    }).catch(err => {
        console.log("err in admin login", err);
        return err;
    })
}