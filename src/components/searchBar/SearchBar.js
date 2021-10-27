import React from 'react';
import "./search-bar.css";
import SvgHelper from "../../SvgHelper";

function SearchBar(props) {
    return (

        <div className="search-bar">

            <div className="d-flex flex-nowrap dropdown-filter">
                <div className="filtering-by-price">
                    <select className="form-select" aria-label="Default select example">
                        <option selected>Price: Default &nbsp;</option>
                        <option value="1">Price: High to Low &nbsp;</option>
                        <option value="2">Price: Low to High &nbsp;</option>
                    </select>
                </div>

                <p>&nbsp;&nbsp;</p>

                <div className="filtering-by-brand">
                    <select className="form-select" aria-label="Default select example">
                        <option selected>All Product &nbsp;</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
            </div>

            <div className="d-flex flex-grow-1 m-1">
                <input type="text" className="form-control search-field" aria-label="Text input with dropdown button"
                       placeholder="Search for anything..."/>


                <button className="btn btn-warning search-btn">
                    <SvgHelper
                        color={"#ffffff"}
                        path={"M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"}/>
                    &nbsp;
                    Search
                </button>
            </div>

        </div>


    );
}

export default SearchBar;