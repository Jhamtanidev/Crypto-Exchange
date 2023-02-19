import React from 'react'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';

import { Navbar, Welcome, Footer, Services, Transactions } from "./index";

function MainPage() {
    const [toggleMenu, setToggleMenu] = React.useState(false);
    return (
        <>
            <div className="min-h-screen">
                <div className="gradient-bg-welcome">
                    <Welcome />
                </div>
                <Services />
                <Transactions />
                <Footer />
            </div>
        </>
    )
}

export default MainPage