import CompanyContent from "./companieContent/CompanyContent";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {setCompany} from "../../reducers/actionCreators/fileActionCreators";
import Company from "../../services/CompanisJson"
import "./companiesContentStyle.scss"

export default function CompaniesContent({setCompanyCount}) {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setCompany(Company))
    }, [dispatch])

    const store = useSelector((store) => store);

    const {fileReducer, filterReducer} = store;

    let {companyInfo} = fileReducer;

    const {
        findByCompany,
        findBySuy,
        findByContact,
        status,
        type,
        price,
        idDelete,
        currentPage,
        rowPerPage,
    } = filterReducer;

    companyInfo = companyInfo.filter(value => (value.nameCompany.includes(findByCompany)));
    companyInfo = companyInfo.filter(value => (value.sku.toString().includes(findBySuy)));
    companyInfo = companyInfo.filter(value => (value.contact.name.includes(findByContact)));
    companyInfo = companyInfo.filter(value => !(idDelete.includes(value.id)));

    companyInfo = companyInfo.filter(value => {

        switch (status) {
            case  'Danger': {
                return value.status === 'Danger'
            }
            case  'Active': {
                return value.status === 'Active'
            }
            case  'Pending': {
                return value.status === 'Pending'
            }
            default:
                return value;
        }
    });

    companyInfo = companyInfo.filter(value => {
        switch (type) {
            case  'Bravo': {
                return value.type === 'Bravo'
            }
            case  'Alfa': {
                return value.type === 'Alfa'
            }
            case  'Gold': {
                return value.type === 'Gold'
            }
            default:
                return value;
        }
    });

    companyInfo = (price === 'cheap') ? companyInfo.sort((a, b) => a.price.slice(1) - b.price.slice(1)) : (price === 'dear') ? companyInfo.sort((a, b) => b.price.slice(1) - a.price.slice(1)) : companyInfo;

    setCompanyCount(companyInfo.length);

    companyInfo = companyInfo.slice(currentPage * rowPerPage - rowPerPage, rowPerPage * currentPage);

    return (
        <div className="companiesContent">
            {
                companyInfo.map(({urlImg, nameCompany, status, type, sku, contact, price, id}) =>
                    <CompanyContent
                        key={id}
                        id={id}
                        urlImg={urlImg}
                        nameCompany={nameCompany}
                        status={status}
                        type={type}
                        sku={sku}
                        contact={contact}
                        price={price}
                    />)
            }
        </div>
    );
}
