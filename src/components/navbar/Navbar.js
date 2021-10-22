import React from 'react';
import "./navbar.css"
import SearchBar from "../searchBar/SearchBar";
import SvgHelper from "../../SvgHelper";

function Navbar(props) {
    return (
        <>
            <nav className="navbar navbar-dark navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand me-auto">Amazona</a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                        <ul className="navbar-nav my-2 my-lg-0 navbar-nav-scroll">
                            <li className="nav-item">
                                <a className="nav-link">
                                    <SvgHelper size={"18"} color={"rgb(240,122,23)"} path={"M22,18V22H18V19H15V16H12L9.74,13.74C9.19,13.91 8.61,14 8,14A6,6 0 0,1 2,8A6,6 0 0,1 8,2A6,6 0 0,1 14,8C14,8.61 13.91,9.19 13.74,9.74L22,18M7,5A2,2 0 0,0 5,7A2,2 0 0,0 7,9A2,2 0 0,0 9,7A2,2 0 0,0 7,5Z"}/>
                                    <span> </span>
                                    Sign in
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">
                                    <SvgHelper color={"rgb(240,122,23)"} path={"M17,18A2,2 0 0,1 19,20A2,2 0 0,1 17,22C15.89,22 15,21.1 15,20C15,18.89 15.89,18 17,18M1,2H4.27L5.21,4H20A1,1 0 0,1 21,5C21,5.17 20.95,5.34 20.88,5.5L17.3,11.97C16.96,12.58 16.3,13 15.55,13H8.1L7.2,14.63L7.17,14.75A0.25,0.25 0 0,0 7.42,15H19V17H7C5.89,17 5,16.1 5,15C5,14.65 5.09,14.32 5.24,14.04L6.6,11.59L3,4H1V2M7,18A2,2 0 0,1 9,20A2,2 0 0,1 7,22C5.89,22 5,21.1 5,20C5,18.89 5.89,18 7,18M16,11L18.78,6H6.14L8.5,11H16Z"}/>
                                    Cart
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Orders</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <SearchBar/>
        </>
    );
}

export default Navbar;