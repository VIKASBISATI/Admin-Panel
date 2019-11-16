import { ADMIN_COMPLETE_ORDER_FAILURE, ADMIN_COMPLETE_ORDER_REQUEST, ADMIN_COMPLETE_ORDER_SUCCESS } from '../constants/actionTypes'
export default (state = { orderCompleted: false, isRequested: false, cartData: [] }, action) => {
    switch (action.type) {
        case ADMIN_COMPLETE_ORDER_REQUEST:
            return {
                ...state,
                isRequested: true,
                cartData: action.payload
            }
        case ADMIN_COMPLETE_ORDER_SUCCESS: return {
            ...state,
            orderCompleted: true,
            cartData: action.payload
        }
        case ADMIN_COMPLETE_ORDER_FAILURE: return {
            ...state,
            orderCompleted: false,
            cartData: action.payload
        }
        default: return { 
            state
        }
    }
}