import React from 'react';
import "./search-bar.css";
import SvgHelper from "../../SvgHelper";

function SearchBar(props) {
    return (

        <div className="search-bar">
            <div className="input-group mb-3">

                <select className="form-select" aria-label="Default select example">
                    <option selected>All Product &nbsp;</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>

                <input type="text" className="form-control" aria-label="Text input with dropdown button"
                       placeholder="Search for anything..."/>
            </div>
            <button className="btn btn-warning search-btn">
                <SvgHelper
                    color={"#ffffff"}
                    path={"M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"} />
                &nbsp;
                Search
            </button>

        </div>


    );
}

export default SearchBar;