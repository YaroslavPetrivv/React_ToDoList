import {
    FIND_BY_COMPANY,
    SET_COMPANY,
    FIND_BY_SUY,
    FIND_BY_CONTACT,
    CHANGE_STATUS,
    CHANGE_TYPE,
    CHANGE_PRICE,
    SET_TOTAL_COMPANIES,
    CHANGE_PER_PAGE,
    CHANGE_CURRENT_PAGE,
    DELETE_BY_ID, SET_ACTIVE_CHECK_BOX, RESET_CURRENT_PAGE,
    CHECKED_BY_ID
} from '../actionTypes'


export const setCompany = (companyInfo) => ({
    type: SET_COMPANY, payload: {companyInfo}
});

export const setActiveCheckBox = (customInfo) => ({
    type: SET_ACTIVE_CHECK_BOX, payload: {customInfo}
});

export const findByCompany = (findOptions) => ({
    type: FIND_BY_COMPANY, payload: {findOptions}
});

export const findBySuy = (findOptions) => ({
    type: FIND_BY_SUY, payload: {findOptions}
});

export const findByContact = (findOptions) => ({
    type: FIND_BY_CONTACT, payload: {findOptions}
});

export const changeByStatus = (changeOptions) => ({
    type: CHANGE_STATUS, payload: {changeOptions}
});

export const changeByType = (changeOptions) => ({
    type: CHANGE_TYPE, payload: {changeOptions}
});

export const changeByPrice = (changeOptions) => ({
    type: CHANGE_PRICE, payload: {changeOptions}
});

export const deleteById = (id) => ({
    type: DELETE_BY_ID, payload: {id}
});
export const checkedById = (id) => ({
    type: CHECKED_BY_ID, payload: {id}
});

export const changePerPage = (changeOptions) => ({
    type: CHANGE_PER_PAGE, payload: {changeOptions}
});

export const setTotalCompanies = (changeOptions) => ({
    type: SET_TOTAL_COMPANIES, payload: {changeOptions}
});

export const changeCurrentPage = (changeOptions) => ({
    type: CHANGE_CURRENT_PAGE, payload: {changeOptions}
});
export const resetCurrentPage = (id) => ({
    type: RESET_CURRENT_PAGE, payload:{id}
});
