import React from 'react';
import "./product-details.css";
import SvgHelper from "../../SvgHelper";

function ProductDetails(props) {

    return (
        <div className="container product-details--page">
            <div className="row flex-wrap">
                <div className="col-md-5 col-sm-12 product-image ">
                    <img src="/images/p1.jpg" alt="sample-image" className="img-thumbnail"/>
                </div>
                <div className="col-md-7 col-sm-12 flex-column px-4 gy-3">
                    <h3 className="mb-4 product-name">Brand new Party Shirt</h3>
                    <div className="row">
                        <div className="col-md col-sm">
                            <p className="product-condition">Price: <span className="h5">US $300</span></p>
                        </div>
                        <div className="col-md col-sm">
                            <p className="product-condition">Status: <span className="h5">In Stock</span></p>
                        </div>
                        <div className="col-md col-sm">
                            <p className="product-condition">Product code: <span className="h5">8954</span></p>
                        </div>
                        <div className="col-md col-sm">
                            <p className="product-condition">Brand: <span className="h5">Adidas</span></p>
                        </div>
                    </div>
                    <h4 className="key-features-title">Key Features</h4>
                    <div className="product-features">
                        <p className="features-item"><span className="item-header">Price: &nbsp; &nbsp;</span> US <span
                            className="h1 display-1">$240</span></p>
                        <p className="features-item"><span className="item-header">Brand: </span> &nbsp; <span
                            className="h3">Nike</span></p>
                        <p className="features-item mt-5"><span className="display-6">About Product</span></p>
                        <span className="features-item">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi autem, consequatur explicabo fuga mollitia quaerat quam tenetur totam? Architecto aut fugiat itaque odio repellendus. Deserunt doloremque dolores quis ratione voluptatem.</span>
                        <div className="quantity-section">
                            <p className="quantity-label">Quantity:</p>
                            <div className="value-update-section">
                                <div className="update-quantity">
                                    <button className="btn plus-btn btn-outline-secondary">
                                        <SvgHelper path={"M20 14H4V10H20V14Z"} color={"rgb(35,47,62)"} size="18"/>
                                    </button>

                                    <p className="quantity-value"> 1 </p>

                                    <button className="btn minus-btn btn-outline-secondary">
                                        <SvgHelper path={"M20 14H14V20H10V14H4V10H10V4H14V10H20V14Z"} size="18"
                                                   color={"rgb(35,47,62)"}/>
                                    </button>
                                </div>
                                <div className="buy-now-btn-section">
                                    <button className="btn  btn-outline-primary buy-now-btn">Buy Now</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;