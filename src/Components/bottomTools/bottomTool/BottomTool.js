import "./bottomToolStyle.scss"
import {useDispatch} from "react-redux";
import {changeCurrentPage, changePerPage} from "../../../reducers/actionCreators/fileActionCreators";


export default function BottomTool({countRow, pagesCount, currentPage}) {

    const dispatch = useDispatch();

    const changeRowPerPage = (e) => {
        dispatch(changePerPage(e.target.value))
    }

    const removePagePagination = () => {
        dispatch(changeCurrentPage((currentPage - 1 <= 0) ? pagesCount : currentPage - 1))
    }

    const addPagePagination = () => {
        dispatch(changeCurrentPage((currentPage + 1 > pagesCount) ? 1 : currentPage + 1))
    }

    return (
        <div className="bottomTools">
            <div className="bottomTools__pagination">
                <button style={{backgroundImage: "url('img/arrowLeft.png')"}}
                        onClick={removePagePagination}/>
                <p className="currentPage">
                    {currentPage}
                </p>
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
                        countRow.map(status => <option>{status}</option>)
                    }
                </select>
            </div>
        </div>
    );
}
