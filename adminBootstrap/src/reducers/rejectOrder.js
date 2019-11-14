import { ADMIN_CANCEL_ORDER_FAILURE, ADMIN_CANCEL_ORDER_REQUEST, ADMIN_CANCEL_ORDER_SUCCESS } from '../constants/actionTypes'
export default (state = { orderCancelled: false, isRequested: false, cartData: [] }, action) => {
    switch (action.type) {
        case ADMIN_CANCEL_ORDER_REQUEST:
            return {
                ...state,
                isRequested: true,
                cartData: action.payload
            }
        case ADMIN_CANCEL_ORDER_SUCCESS: return {
            ...state,
            orderCancelled: true,
            cartData: action.payload
        }
        case ADMIN_COMPLETE_ORDER_FAILURE: return {
            ...state,
            orderCancelled: false,
            cartData: action.payload
        }
        default: return {
            state
        }
    }
}