import "./searchStyle.scss"


export default function SearchTool({stateCheckbox, handleInput, fieldName}) {
    return (
        <div className="headerTools_item ">
            <p className="headerTools__name">{fieldName}</p>
            <input onChange={handleInput} type="search" id="checkboxCompany" placeholder="Search"
                   value={stateCheckbox}/>
            <label htmlFor="checkboxCompany"> </label>

        </div>
    );
}
