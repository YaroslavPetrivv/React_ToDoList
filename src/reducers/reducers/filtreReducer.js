import {
    CHANGE_CURRENT_PAGE,
    CHANGE_PER_PAGE,
    CHANGE_PRICE,
    CHANGE_STATUS,
    CHANGE_TYPE,
    DELETE_BY_ID,
    FIND_BY_COMPANY,
    FIND_BY_CONTACT,
    FIND_BY_SUY,
    RESET_CURRENT_PAGE,
    SET_ACTIVE_CHECK_BOX,
    SET_TOTAL_COMPANIES
} from "../actionTypes";

const initialState = {
    findByCompany: '',
    findBySuy: '',
    findByContact: '',
    status: 'All',
    type: 'All',
    price: 'All',
    isActiveCheckBox: false,
    idDelete: [],
    currentPage: 1,
    totalCompanies: 0,
    rowPerPage: 5,
}

export default function filterReducer(state = initialState, action) {

    switch (action.type) {
        case  FIND_BY_COMPANY: {
            return {
                ...state,
                findByCompany: action.payload.findOptions
            }
        }
        case  FIND_BY_SUY: {
            return {
                ...state,
                findBySuy: action.payload.findOptions
            }
        }
        case  FIND_BY_CONTACT: {
            return {
                ...state,
                findByContact: action.payload.findOptions
            }
        }
        case  CHANGE_STATUS: {
            return {
                ...state,
                status: action.payload.changeOptions
            }
        }
        case  CHANGE_TYPE: {
            return {
                ...state,
                type: action.payload.changeOptions
            }
        }
        case  CHANGE_PRICE: {
            return {
                ...state,
                price: action.payload.changeOptions
            }
        }
        case  DELETE_BY_ID: {
            return {
                ...state,
                idDelete: [...state.idDelete, action.payload.id]
            }
        }
        case  SET_ACTIVE_CHECK_BOX: {
            return {
                ...state,
                isActiveCheckBox: action.payload.customInfo
            }
        }
        case CHANGE_PER_PAGE : {
            return {
                ...state,
                rowPerPage: action.payload.changeOptions,
            }
        }

        case CHANGE_CURRENT_PAGE : {
            return {
                ...state,
                currentPage: action.payload.changeOptions,
            }
        }
        case SET_TOTAL_COMPANIES : {
            return {
                ...state,
                totalCompanies: action.payload.changeOptions,
            }
        }
        case RESET_CURRENT_PAGE : {
            return {
                ...state,
                currentPage: 1
            }
        }
        default:
            return state
    }
}
