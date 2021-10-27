import React from 'react';
import "./ship-to.css";

function ShipTo(props) {
    return (
        <div className="ship-to mt-5">

            <hr/>
            <p className="ship-to__title mb-5">Ship to</p>

            <div className="d-flex justify-content-between flex-wrap my-3">
                <div className="form-group">
                    <label htmlFor="country" className="ship-to__label">Country or region</label>
                    <select name="country" id="country" className="px-3 form-select form-select-lg ship-to__select">
                        <option></option>
                        <option value="bangladesh">Bangladesh</option>
                        <option value="bangladesh">USA</option>
                        <option value="bangladesh">UK</option>
                        <option value="bangladesh">India</option>
                        <option value="bangladesh">Nepal</option>
                        <option value="bangladesh">Bhutan</option>
                        <option value="bangladesh">Canada</option>
                    </select>
                </div>

                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>

                <div className="form-group flex-grow-1">
                    <label htmlFor="phone" className="ship-to__label">Phone</label>
                    <input type="number" id="phone" className="form-control form-control-lg"/>
                </div>
            </div>

            <div className="d-flex justify-content-between flex-wrap my-3">
                <div className="form-group flex-grow-1">
                    <label htmlFor="fname" className="ship-to__label">First Name</label>
                    <input type="text" className="form-control form-control-lg"/>
                </div>

                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>

                <div className="form-group flex-grow-1">
                    <label htmlFor="lname" className="ship-to__label">Last Name</label>
                    <input type="text" className="form-control form-control-lg"/>
                </div>
            </div>

            <div className="d-flex justify-content-between flex-wrap my-3">
                <div className="form-group flex-grow-1">
                    <label htmlFor="address" className="ship-to__label">Address</label>
                    <input type="number" id="city" className="form-control form-control-lg"/>
                </div>

                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>

                <div className="form-group flex-grow-1">
                    <label htmlFor="city" className="ship-to__label">City</label>
                    <input type="text" id="city" className="form-control form-control-lg"/>
                </div>
            </div>

            <div className="d-flex justify-content-between flex-wrap my-3">
                <div className="form-group flex-grow-1">
                    <label htmlFor="zipCode" className="ship-to__label">Zip code</label>
                    <input type="text" id="zipCode" className="form-control form-control-lg"/>
                </div>

                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>

                <div className="form-group flex-grow-1">
                    <label htmlFor="email" className="ship-to__label">Email</label>
                    <input type="email" id="email" className="form-control form-control-lg"/>
                </div>
            </div>

            <div className="d-flex justify-content-between flex-wrap my-3">
                <div className="form-group flex-grow-1">
                    <label htmlFor="address" className="ship-to__label">Address</label>
                    <textarea className="form-control address-field" id="address"/>
                </div>
            </div>

            <button className="btn btn-secondary address-save-btn my-3">Done</button>

        </div>
    );
}

export default ShipTo;