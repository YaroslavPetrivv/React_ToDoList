import "./headerToolsStyle.scss"
import CheckboxTool from "./headerTols/CheckboxTool/CheckboxTool";
import {useState} from "react";
import SearchTool from "./headerTols/searchTools/SearchTool";
import SelectTool from "./headerTols/SelectTool/SelectTool";
import {useDispatch} from "react-redux";
import {
    changeByPrice,
    changeByStatus,
    changeByType,
    findByCompany,
    findByContact,
    findBySuy, resetCurrentPage, setActiveCheckBox
} from "../../reducers/actionCreators/fileActionCreators";
import {RESET_CURRENT_PAGE} from "../../reducers/actionTypes";

export default function HeaderTools() {

    const dispatch = useDispatch();

    const [stateCheckbox, setStateCheckbox] = useState(false);

    const [stateSearchCompany, setStateSearchCompany] = useState('');

    const [stateSelectStatus, setStateSelectStatus] = useState('All');

    const [stateSelectType, setStateSelectType] = useState('All');

    const [stateSearchSku, setStateSearchSku] = useState('');

    const [stateSearchContact, setStateSearchContact] = useState('');

    const [stateSelectPrice, setStateSelectPrice] = useState('All');


    const handleSearchCompany = (e) => {
        setStateSearchCompany(e.target.value);
    }
    dispatch(findByCompany(stateSearchCompany));


    const handleCheckbox = (e) => {
        setStateCheckbox(e.target.checked);
    }
        dispatch(setActiveCheckBox(stateCheckbox));


    const handleSelectSku = (e) => {
        setStateSearchSku(e.target.value);
    }
    dispatch(findBySuy(stateSearchSku));


    const handleSelectStatus = (e) => {
        setStateSelectStatus(e.target.value);
    }
    const handleSelectStatusButton = (value) => {
        setStateSelectStatus(value);
    }
    dispatch(changeByStatus(stateSelectStatus));


    const handleSelectType = (e) => {
        setStateSelectType(e.target.value);
    }
    const handleSelectTypeButton = (value) => {
        setStateSelectType(value);
    }
    dispatch(changeByType(stateSelectType));


    const handleSelectContact = (e) => {
        setStateSearchContact(e.target.value);
    }
    dispatch(findByContact(stateSearchContact));


    const handleSelectPrice = (e) => {
        setStateSelectPrice(e.target.value);
    }
    const handleSelectPriceButton = (value) => {
        setStateSelectPrice(value);
    }
    dispatch(changeByPrice(stateSelectPrice));
    dispatch(resetCurrentPage());


    return (
        <div className="headerTools">
            <CheckboxTool stateCheckbox={stateCheckbox} handleCheckbox={handleCheckbox}/>
            <SearchTool stateSearch={stateSearchCompany} handleInput={handleSearchCompany} fieldName="Company"/>
            <SelectTool stateSelect={stateSelectStatus} handleSelectStatusButton={handleSelectStatusButton}
                        handleSelect={handleSelectStatus} fieldName="Status"
                        status={['All', 'Active', 'Danger', 'Pending']}/>
            <SelectTool stateSelect={stateSelectType} handleSelectStatusButton={handleSelectTypeButton}
                        handleSelect={handleSelectType} fieldName="Type"
                        status={['All', 'Bravo', 'Gold', 'Alfa']}/>
            <SearchTool stateSearch={stateSearchSku} handleInput={handleSelectSku} fieldName="SKU"/>
            <SearchTool stateSearch={stateSearchContact} handleInput={handleSelectContact} fieldName="Contact"/>
            <SelectTool stateSelect={stateSelectPrice} handleSelectStatusButton={handleSelectPriceButton}
                        handleSelect={handleSelectPrice} fieldName="Price USD"
                        status={['All', 'cheap', 'dear']}/>
            <p className="headerTools__name">Action</p>
        </div>
    );
}
