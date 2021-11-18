import "./SelectStyle.scss"

export default function SelectTool({stateSelect, handleSelect, fieldName, status, handleSelectStatusButton}) {


    const chengStatusUp = () => {
        (status.indexOf(stateSelect) === status.length - 1) ? handleSelectStatusButton(status[0]) : handleSelectStatusButton(status[status.indexOf(stateSelect) + 1])
    }

    const chengStatusDown = () => {
        (status.indexOf(stateSelect) === -1) ? handleSelectStatusButton(status[status.length - 1]) : handleSelectStatusButton(status[status.indexOf(stateSelect) - 1])
    }


    return (
        <div className={(fieldName === "Price USD") ? 'center' : ''}>
            <div className="headerTools_item">
                <div className="headerTools__action">
                    <p className="headerTools__name">{fieldName}</p>
                    <div className="headerTools__button">
                        <button onClick={chengStatusUp}></button>
                        <button onClick={chengStatusDown}></button>
                    </div>
                </div>
                <select onChange={handleSelect} value={stateSelect}
                        style={{backgroundImage: "url('img/ShapeDown.png')"}}>
                    {
                        status.map(status => <option key={status}>{status}</option>)
                    }
                </select>
            </div>
        </div>
    );
}
