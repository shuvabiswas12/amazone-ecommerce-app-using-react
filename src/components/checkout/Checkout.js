import React from 'react';
import "./checkout.css";

function Checkout(props) {
    return (
        <div className="checkout container">
            <div className="row">
                <p>&nbsp;</p>
                <div className="item">
                    <p>Subtotal (1 item)</p>
                    <p className="text-right"> US $56</p>
                </div>
                <div className="item">
                    <p>Shipping</p>
                    <p className="text-right">US $90</p>
                </div>
                <hr/>

                <div className="item">
                    <p className="fw-bold">Order total</p>
                    <p className="text-right fw-bold">US $86</p>
                </div>

                <p>&nbsp;</p>

                <div className="item">
                    <button className="btn btn-secondary confirm-and-pay-btn">Confirm and pay</button>
                </div>
            </div>
        </div>
    );
}

export default Checkout;