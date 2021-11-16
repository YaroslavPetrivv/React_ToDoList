import "./BottomToolsStyle.scss"
import BottomTool from "./bottomTool/BottomTool";
import {useSelector} from "react-redux";

export default function BottomTools({countCompanyPages}) {

    const store = useSelector((store) => store);

    const {filterReducer} = store;

    const {currentPage, rowPerPage} = filterReducer;

    let pagesCount = Math.ceil(countCompanyPages / rowPerPage);

    return (
        <BottomTool pagesCount={pagesCount} currentPage={currentPage}  countRow={[5, 10, 15]}/>
    );
}
