import { ADMIN_QUESTION_APPROVAL_FAILURE, ADMIN_QUESTION_APPROVAL_REQUEST, ADMIN_QUESTION_APPROVAL_SUCCESS } from '../constants/actionTypes'
export default (state = { approveCompleted: false, isRequested: false, approvalData: [] }, action) => {
    switch (action.type) {
        case ADMIN_QUESTION_APPROVAL_REQUEST:
            return {
                ...state,
                isRequested: true,
                approvalData: action.payload
            }
        case ADMIN_QUESTION_APPROVAL_SUCCESS: return {
            ...state,
            approveCompleted: true,
            approvalData: action.payload
        }
        case ADMIN_QUESTION_APPROVAL_FAILURE: return {
            ...state,
            approveCompleted: false,
            approvalData: action.payload
        }
        default: return { 
            state
        }
    }
}