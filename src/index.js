import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import './index.css';
import {BrowserRouter, Switch} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

function Main() {
    return (
        <React.StrictMode>
            <BrowserRouter>
                <Switch>
                    <Navbar/>

                </Switch>
            </BrowserRouter>
        </React.StrictMode>
    )
}


ReactDOM.render(
    <Main/>,
    document.getElementById('root')
);

