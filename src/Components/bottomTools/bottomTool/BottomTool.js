import "./bottomToolStyle.scss"
import {useDispatch} from "react-redux";
import {changeCurrentPage, changePerPage, resetCurrentPage} from "../../../reducers/actionCreators/fileActionCreators";
import {useMemo, useState} from "react";


export default function BottomTool({countRow, pagesCount, currentPage}) {

    const dispatch = useDispatch();

    const [stateCurrentPage, setStateCurrentPage] = useState(currentPage)

    const changeRowPerPage = (e) => {
        dispatch(changePerPage(e.target.value))
        dispatch(resetCurrentPage())
    }

    const changeInputKey = (e) => {
        if (e.target.key === 8) {
            if (stateCurrentPage.length === 1) {
                console.log('ok');
                setStateCurrentPage(stateCurrentPage);
            } else {
                setStateCurrentPage(stateCurrentPage.splice(-1, 1)) // her
            }
        }

        if (+(e.target.value.slice(stateCurrentPage.length - 1)) <= +pagesCount && typeof (+e.target.value.slice(stateCurrentPage.length - 1))) {
            setStateCurrentPage(stateCurrentPage + e.target.value)
        }
    }

    const removePagePagination = () => {
        setStateCurrentPage((currentPage - 1 <= 0) ? pagesCount : currentPage - 1)
    }

    const addPagePagination = () => {
        setStateCurrentPage((currentPage + 1 > pagesCount) ? 1 : currentPage + 1)
    }

    useMemo(() => {
        dispatch(changeCurrentPage(stateCurrentPage))
    }, [dispatch, stateCurrentPage])

    return (
        <div className="bottomTools">
            <div className="bottomTools__pagination">
                <button style={{backgroundImage: "url('img/arrowLeft.png')"}}
                        onClick={removePagePagination}/>
                <input onKeyDown={changeInputKey} value={stateCurrentPage} className="currentPage">
                </input>
                <p>/</p>
                <p>{pagesCount}</p>
                <button style={{backgroundImage: "url('img/arrowRight.png')"}}
                        onClick={addPagePagination}/>
            </div>
            <div className="bottomTools__NumberPages">
                <p>Rows per page</p>
                <select
                    style={{backgroundImage: "url('img/ShapeDown.png')"}} onChange={changeRowPerPage}>
                    {
                        countRow.map(status => <option key={status}>{status}</option>)
                    }
                </select>
            </div>
        </div>
    );
}
