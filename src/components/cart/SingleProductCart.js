import React from 'react';
import "./cart.css";
import {Link} from "react-router-dom";
import SvgHelper from "../../SvgHelper";

function SingleProductCart(props) {
    return (
        <div className="row single-product-cart">
            <div className="col-5 cart-product-img product-image">
                <span className="product-brand-name py-2 px-3">Nike</span>
                <Link to="/product/id">
                    <img src="/images/p6.jpg" alt="..." className="img-thumbnail"/>
                </Link>
            </div>
            <div className="col">
                <p className=" cart-product-name">Nice Cotton Black Trouser</p>
                <p className="product-price-in-cart fw-bold">$29</p>
                <div className="d-flex align-items-center">
                    <label htmlFor="quantity" className="quantity">QTY. </label>
                    <select name="Quantity" id="quantity" className="form-select form-select-lg quantity">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>

                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>

                    <button className="btn btn-danger">
                        <SvgHelper size="20"
                            path="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z"/>
                    </button>
                </div>

                <hr/>
                <div className="total-price-section">
                    <p className="total-price fw-bold">TOTAL</p>
                    <p className="total-price fw-bold text-right">$456</p>
                </div>
            </div>
        </div>
    );
}

export default SingleProductCart;