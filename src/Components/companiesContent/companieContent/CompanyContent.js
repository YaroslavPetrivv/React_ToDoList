import "./CompanyContentStyle.scss"
import {useState} from "react";
import {useDispatch} from "react-redux";
import {deleteById} from "../../../reducers/actionCreators/fileActionCreators";

export default function CompanyContent({
                                           urlImg,
                                           nameCompany,
                                           status,
                                           type,
                                           sku,
                                           contact: {img, name},
                                           price,
                                           id,
                                           active,
                                       }) {
    const [menuFallingOutMenuState, setMenuFallingOutMenuState] = useState(false);
    const [checked, setChecked] = useState(false);


    const dispatch = useDispatch();

    const deleteItem = () => {
        setMenuFallingOutMenuState(!menuFallingOutMenuState);
        dispatch(deleteById(id))
    }
    return (
        <div className="companyContent">
            <div className="CheckBox">
                <div className="element-wrapper">
                    <input onChange={() => setChecked(!checked)}
                           checked={active || checked}
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
