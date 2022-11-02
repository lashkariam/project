import { useState } from "react";
import {useDispatch } from "react-redux"
import { getResults } from "./actions";
import "./search.css";
import { addSearchTerm, setDefaultResults } from "./searchSlice";

function Searchbar() {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch()
  
  const handleChange = (event) => {
    setTerm(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addSearchTerm(term))
    dispatch(setDefaultResults());
    dispatch(getResults({term,page:1}))
  };
  return (
    <form onSubmit={handleSubmit} className="search">
      <div class="ui icon input fluid">
        <input
          type="text"
          onChange={handleChange}
          placeholder="جستجو کنید..."
          value={term}
        />
        <i class="circular search link icon" onClick={handleSubmit}></i>
      </div>
    </form>
  );
}

export default Searchbar;
