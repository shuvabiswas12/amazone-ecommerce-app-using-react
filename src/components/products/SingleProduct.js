import React from "react";
import "./products.css";
import {Link} from "react-router-dom";

export default function SingleProducts(props) {

    const product = props.product

    return (
        <div className="product">
            <p className="brand-name text-opacity-100 h3">{product.brand}</p>
            <Link to="/product/id">
                <img src={product.image} alt="..." className="img-responsive"/>
            </Link>
            <h4 className="product-name my-2">{product.name}</h4>
            <div className="price-and-brand mt-2 mb-3">
                <p className="price">Price: ${product.price}</p>
                <button className="btn btn-outline-warning add-to-cart--btn">Add To Cart</button>
            </div>
        </div>
    )
}
