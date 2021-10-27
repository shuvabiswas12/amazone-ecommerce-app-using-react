import React from 'react';
import "./login.css";
import {Link} from "react-router-dom";

function Login(props) {
    return (
        <div className="form-container login-container-label">
            <form>
                <div className="form-group">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" id="email" className="form-control" autoComplete="off"/>
                </div>
                <div className="form-group">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" id="password" className="form-control" autoComplete="off"/>
                </div>
                <button className="btn login-btn btn-warning">Sign In</button>
                <div className="d-flex align-items-center justify-content-start">
                    <p className="btn-label">New Customer?</p>
                    <Link to="/signup">
                        <h4 className="signin-signup-label">Create Account</h4>
                    </Link>
                </div>

            </form>
        </div>
    );
}

export default Login;