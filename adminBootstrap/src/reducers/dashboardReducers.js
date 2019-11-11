import { GET_ADMIN_DATA } from '../constants/actionTypes';
export default(state = {user:[]}, action)=> {
    switch (action.type) {
        case GET_ADMIN_DATA:
            return {
                ...state,
                getAdminData: true,
                user: action.payload
            };
        default:
            return state
    }
}
