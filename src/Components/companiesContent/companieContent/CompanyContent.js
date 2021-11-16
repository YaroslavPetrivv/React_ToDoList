import "./CompanyContentStyle.scss"
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteById, setCompany} from "../../../reducers/actionCreators/fileActionCreators";
import Company from "../../../services/CompanisJson";

export default function CompanyContent({
                                           urlImg,
                                           nameCompany,
                                           status,
                                           type,
                                           sku,
                                           contact: {img, name},
                                           price,
                                           id
                                       }) {
    const [menuFallingOutMenuState, setMenuFallingOutMenuState] = useState(false);
    const [checkBoxState, setCheckBoxState] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setCompany(Company))
    }, [dispatch])

    const store = useSelector((store) => store);

    const {filterReducer} = store;

    const {isActiveCheckBox} = filterReducer;


    const deleteItem = () => {
        setMenuFallingOutMenuState(!menuFallingOutMenuState);
        dispatch(deleteById(id))
    }

    return (
        <div className="companyContent">
            <div className="CheckBox">
                <div className="element-wrapper">
                    <input checked={checkBoxState || isActiveCheckBox}
                           onChange={() => setCheckBoxState(!checkBoxState)}
                           type="checkbox"
                           placeholder="Search"
                           className="checkbox" id="checkbox1"/>
                    <label htmlFor="checkbox1"> </label>
                </div>
            </div>

            <div className="companyContent__companyName">
                <img src={urlImg} alt=""/>
                <p>{nameCompany}</p>
            </div>
            <div className="companyContent__status">
                <p className={(status === 'Active') ? 'active' : (status === 'Pending') ? 'pending' : 'danger'}>{status}</p>
            </div>
            <div className="companyContent__type">
                <p>{type}</p>
            </div>
            <div className="companyContent_sku">
                <p>{sku}</p>
            </div>
            <div className="companyContent_contact">
                <img src={img} alt=""/>
                <p>{name}</p>
            </div>
            <div className="companyContent_price">
                <p>{price}</p>
            </div>

            <div className="companyContent_action" onClick={() => setMenuFallingOutMenuState(!menuFallingOutMenuState)}>

                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>

                <div className={(menuFallingOutMenuState) ? "fallingOutMenu" : "fallingOutMenuHidden"}>

                    <button onClick={deleteItem}>
                        Delete
                    </button>

                    <button id={id} onClick={() => setMenuFallingOutMenuState(!menuFallingOutMenuState)}>
                        Back
                    </button>
                </div>
            </div>
        </div>
    );
}
