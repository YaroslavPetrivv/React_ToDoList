import CompanyContent from "./companieContent/CompanyContent";
import {useSelector} from "react-redux";
import "./companiesContentStyle.scss"
import {useMemo} from "react";

export default function CompaniesContent({setCompanyCount}) {
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
        isActiveCheckBox
    } = filterReducer;

    companyInfo = useMemo(() => {
        return companyInfo.filter(value => (value.nameCompany.includes(findByCompany)));
    }, [companyInfo, findByCompany])

    companyInfo = useMemo(() => {
        return companyInfo.filter(value => (value.sku.toString().includes(findBySuy)));
    }, [companyInfo, findBySuy])

    companyInfo = useMemo(() => {
        return companyInfo.filter(value => (value.contact.name.includes(findByContact)));
    }, [companyInfo, findByContact])

    companyInfo = useMemo(() => {
        return companyInfo.filter(value => !(idDelete.includes(value.id)));
    }, [companyInfo, idDelete])


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

    companyInfo = useMemo(() => {
        return (isActiveCheckBox) ? companyInfo.map(value => {
            value.active = true;
            return value
        }) : companyInfo.map(value => {
            value.active = false;
            return value;
        })
    }, [isActiveCheckBox, companyInfo]);


    companyInfo = useMemo(() => {
        return (price === 'cheap') ? companyInfo.sort((a, b) => a.price.slice(1) - b.price.slice(1)) : (price === 'dear') ? companyInfo.sort((a, b) => b.price.slice(1) - a.price.slice(1)) : companyInfo;
    }, [companyInfo, price])


    useMemo(() => {
        setCompanyCount(companyInfo.length);
    }, [setCompanyCount, companyInfo])


    companyInfo = companyInfo.slice(currentPage * rowPerPage - rowPerPage, rowPerPage * currentPage);
    return (
        <div className="companiesContent">
            {companyInfo.length ?
                companyInfo.map(({urlImg, nameCompany, status, type, sku, contact, price, id, active}) =>
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
                        active={active}
                    />) : 'do not have information!'
            }
        </div>
    );
}
