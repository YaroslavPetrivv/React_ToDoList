import {SET_COMPANY} from "../actionTypes";

const initialState = {
    companyInfo: []
}


export default function fileReducer(state = initialState, action) {
    switch (action.type) {
        case SET_COMPANY : {
            return {
                ...state,
                companyInfo: action.payload.companyInfo,
            }
        }
        default:
            return state
    }
}
