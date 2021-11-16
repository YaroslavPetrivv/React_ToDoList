import HeaderComponent from "../Components/header/HeaderComponent";
import ContentWrapper from "../Components/ContentWrapper/ContentWrapper";
import {useEffect} from "react";
import {setCompany} from "../reducers/actionCreators/fileActionCreators";
import Company from "../services/CompanisJson";
import {useDispatch} from "react-redux";

export default function HomePage() {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setCompany(Company))
    }, [dispatch])
    return (
        <>
            <HeaderComponent/>
            <ContentWrapper/>
        </>
    );
}
