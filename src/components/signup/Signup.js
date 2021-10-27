import React from 'react';
import "./sign-up.css";
import {Link} from "react-router-dom";

function Signup(props) {
    return (
        <div className="form-container create-account-label">
            <form>
                <div className="form-group">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" id="name" className="form-control" autoComplete="off"/>
                </div>

                <div className="form-group">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" id="email" className="form-control" autoComplete="off"/>
                </div>
                <div className="form-group">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" id="password" className="form-control" autoComplete="off"/>
                </div>
                <button className="btn btn-warning login-btn">Sign Up</button>
                <div className="d-flex align-items-center justify-content-start">
                    <p className="btn-label">Already have an account?</p>
                    <Link to="/signin">
                        <h4 className="signin-signup-label">Sign In</h4>
                    </Link>
                </div>
            </form>
        </div>
    );
}

export default Signup;