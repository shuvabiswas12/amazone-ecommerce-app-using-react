import React from "react";
import "./products.css";
import data from "../../data";
import SingleProduct from "./SingleProduct";
import SearchBar from "../searchBar/SearchBar";

function AllProducts() {

    const products = data.products

    return (
        <>
            <SearchBar/>

            <div className="products">
                {
                    products.map((product) => <SingleProduct product={product}/>)
                }
            </div>
        </>
    )
}

export default AllProducts

