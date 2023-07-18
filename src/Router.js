import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/layout/Navigation';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Footer from './components/layout/Footer';
import AuthContext from "./context/AuthContext";

function Router() {

    const {loggedIn} = useContext(AuthContext)

    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' exact Component={Home}></Route>
                {loggedIn === false && (
                    <>
                    <Route path='/login' exact Component={Login}></Route>
                    <Route path='/register' exact Component={Register}></Route>
                    </>
                )}
            </Routes>
            <Footer />   
        </BrowserRouter>
    );
};

export default Router;