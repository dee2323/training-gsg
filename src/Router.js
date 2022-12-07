
import {Route,BrowserRouter,Routes} from "react-router-dom";

import React, { Component } from 'react'
import ListingProduct from "./component/ListingProduct/ListingProduct";
import Home from './component/Home/Home'
import AddsBar from "./component/AddsBar/AddsBar";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import LoginPage from "./component/LoginPage/LoginPage";

export default class Router extends Component {
  render() {
    return (
        <BrowserRouter>
        <AddsBar />
        <Header />
        <Routes>
            <Route index element={ <Home />}/>
            <Route path='shop' element={<ListingProduct/>}/>
            <Route path='login' element={<LoginPage />} />
        </Routes>
        <Footer />
    </BrowserRouter>
    )
  }
}
