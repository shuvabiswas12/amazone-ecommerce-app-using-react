import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import './index.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Products from "./components/products/AllProducts";
import Footer from "./components/footer/Footer";
import ProductDetails from "./components/products/ProductDetails";
import Cart from "./components/cart/Cart";

function Main() {
    return (
        <React.StrictMode>
            <BrowserRouter>
                <Navbar/>
                <Switch>
                    <Route path="/" exact>
                        <Products/>
                    </Route>
                    <Route path="/signin">
                        <Login/>
                    </Route>
                    <Route path="/signup">
                        <Signup/>
                    </Route>
                    <Route path="/product/id">
                        <ProductDetails/>
                    </Route>
                    <Route path="/user/cart">
                        <Cart/>
                    </Route>
                </Switch>
                <Footer/>
            </BrowserRouter>
        </React.StrictMode>
    )
}


ReactDOM.render(
    <Main/>,
    document.getElementById('root')
);

