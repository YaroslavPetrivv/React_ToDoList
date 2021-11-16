import {combineReducers} from "redux";
import filterReducer from "./filtreReducer";
import fileReducer from "./fileReducer";

export const rootReducer = combineReducers({
    fileReducer: fileReducer,
    filterReducer: filterReducer,
})
