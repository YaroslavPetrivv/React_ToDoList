import "./ContentWrapperStyle.scss"
import HeaderTools from "../headerTools/HeaderTools";
import CompaniesContent from "../companiesContent/CompaniesContent";
import BottomTools from "../bottomTools/BottomTools";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {setTotalCompanies} from "../../reducers/actionCreators/fileActionCreators";

export default function ContentWrapper() {
    const [countCompanyPages, setCompanyCountPages] = useState(0);
    const dispatch = useDispatch();

    const setCompanyCount = (value) => {
        setCompanyCountPages(value);
    }
    dispatch(setTotalCompanies(countCompanyPages));

    return (
        <div className="ContentWrapper">
            <HeaderTools/>
            <CompaniesContent setCompanyCount={setCompanyCount}/>
            <BottomTools countCompanyPages={countCompanyPages}/>
        </div>
    );
}
