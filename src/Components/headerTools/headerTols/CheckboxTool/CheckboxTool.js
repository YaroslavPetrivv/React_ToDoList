import "./CheckboxToolStyle.scss"

export default function CheckboxTool({stateCheckbox, handleCheckbox}) {
    return (
        <div className="headerTools_CheckBox">
            <div className="element-wrapper">
                <input type="checkbox" onChange={handleCheckbox}
                       placeholder="Search"
                       checked={stateCheckbox} className="checkbox" id="checkbox1"/>
                <label htmlFor="checkbox1"> </label>
            </div>
        </div>
    );
}
