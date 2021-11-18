import "./headerToolsStyle.scss"
import CheckboxTool from "./headerTols/CheckboxTool/CheckboxTool";
import SearchTool from "./headerTols/searchTools/SearchTool";
import SelectTool from "./headerTols/SelectTool/SelectTool";
import {useCallback, useState} from "react";
import {
    changeByPrice,
    changeByStatus, changeByType,
    findByCompany, findByContact,
    findBySuy, resetCurrentPage,
    setActiveCheckBox
} from "../../reducers/actionCreators/fileActionCreators";
import {useDispatch} from "react-redux";

export default function HeaderTools() {
    const [filter, setFilter] = useState({
        stateCheckbox: false,
        searchCompany: '',
        selectStatus: 'All',
        selectType: 'All',
        searchSku: '',
        searchContact: '',
        selectPrice: 'All'
    })


    const dispatch = useDispatch();

    const handleSearchCompany = useCallback((e) => {
        setFilter({...filter, searchCompany: e.target.value})
    }, [filter]);

    const handleCheckbox = useCallback((e) => {
        setFilter({...filter, stateCheckbox: e.target.checked});
    }, [filter])


    const handleSelectSku = useCallback((e) => {
        setFilter({...filter, searchSku: e.target.value})
    }, [filter])


    const handleSelectStatus = useCallback((e) => {
        setFilter({...filter, selectStatus: e.target.value});
    }, [filter]);


    const handleSelectStatusButton = useCallback((value) => {
        setFilter({...filter, selectStatus: value})
    }, [filter])


    const handleSelectType = useCallback((e) => {
        setFilter({...filter, selectType: e.target.value});
    }, [filter])


    const handleSelectTypeButton = useCallback((value) => {
        setFilter({...filter, selectType: value});
    }, [filter])


    const handleSelectContact = useCallback((e) => {
        setFilter({...filter, searchContact: e.target.value});
    }, [filter])


    const handleSelectPrice = useCallback((e) => {
        setFilter({...filter, selectPrice: e.target.value});
    }, [filter])

    const handleSelectPriceButton = useCallback((value) => {
        setFilter({...filter, selectPrice: value});
    }, [filter])

    dispatch(changeByStatus(filter.selectStatus));
    dispatch(findByCompany(filter.searchCompany));
    dispatch(setActiveCheckBox(filter.stateCheckbox));
    dispatch(findBySuy(filter.searchSku));
    dispatch(changeByType(filter.selectType));
    dispatch(findByContact(filter.searchContact));
    dispatch(changeByPrice(filter.selectPrice));
    dispatch(resetCurrentPage());

    return (
        <div className="headerTools">
            <CheckboxTool stateCheckbox={filter.stateCheckbox} handleCheckbox={handleCheckbox}/>
            <SearchTool stateSearch={filter.searchCompany} handleInput={handleSearchCompany} fieldName="Company"/>
            <SelectTool stateSelect={filter.selectStatus} handleSelectStatusButton={handleSelectStatusButton}
                        handleSelect={handleSelectStatus} fieldName="Status"
                        status={['All', 'Active', 'Danger', 'Pending']}/>
            <SelectTool stateSelect={filter.selectType} handleSelectStatusButton={handleSelectTypeButton}
                        handleSelect={handleSelectType} fieldName="Type"
                        status={['All', 'Bravo', 'Gold', 'Alfa']}/>
            <SearchTool stateSearch={filter.searchSku} handleInput={handleSelectSku} fieldName="SKU"/>
            <SearchTool stateSearch={filter.searchCompany} handleInput={handleSelectContact} fieldName="Contact"/>
            <SelectTool stateSelect={filter.selectPrice} handleSelectStatusButton={handleSelectPriceButton}
                        handleSelect={handleSelectPrice} fieldName="Price USD"
                        status={['All', 'cheap', 'dear']}/>
            <p className="headerTools__name">Action</p>
        </div>
    );
}
