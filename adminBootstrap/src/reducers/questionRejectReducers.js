import { ADMIN_QUESTION_REJECTION_FAILURE, ADMIN_QUESTION_REJECTION_REQUEST, ADMIN_QUESTION_REJECTION_SUCCESS } from '../constants/actionTypes'
export default (state = { rejectionCompleted: false, isRequested: false, rejectionData: [] }, action) => {
    switch (action.type) {
        case ADMIN_QUESTION_REJECTION_REQUEST:
            return {
                ...state,
                isRequested: true,
                rejectionData: action.payload
            }
        case ADMIN_QUESTION_REJECTION_SUCCESS: return {
            ...state,
            rejectionCompleted: true,
            rejectionData: action.payload
        }
        case ADMIN_QUESTION_REJECTION_FAILURE: return {
            ...state,
            rejectionCompleted: false,
            rejectionData: action.payload
        }
        default: return { 
            state
        }
    }
}