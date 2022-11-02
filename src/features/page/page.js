import { useDispatch, useSelector } from "react-redux";
import { selectSearchResults, selectSearchTerm, } from "../Search/searchSlice";
import { increamentPage, selectPage } from "./pageSlice";
import {getResults} from "../Search/actions";
import ResultItem from "./ResultItem";

function Page() {
    const searchResults = useSelector(selectSearchResults);
    const term = useSelector(selectSearchTerm)
    const dispatch = useDispatch()
    let page = useSelector(selectPage)
    const handlePages = () =>{
        console.log(page)
        page +=1;
        dispatch(getResults({ term,page }));
    }
    return (
      <div>
        {searchResults.map((result) => (
          <ResultItem resultItem={result} />
        ))}

        <button onClick={handlePages} class="massive ui button fluid" >
          بیشتر{" "}
        </button>
      </div>
    );
}

export default Page;