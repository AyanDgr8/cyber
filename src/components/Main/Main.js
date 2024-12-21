// src/components/Main/Main.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Routes/Home/Home';
import Login from '../Routes/Login/Login';

const Main = () => {
    return (
        <Router>
                <Routes>

                    {/* Add a route for the Afirst component */}
                    <Route path="/" element={<Login />} />

                    {/* Route to the Landing component at the root path */}
                    <Route path="/home" element={<Home />} />
                </Routes>
        </Router>
    );
};


export default Main;
