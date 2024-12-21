// src/components/Main/Main.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Routes/Home/Home';
import Login from '../Routes/Login/Login';
import Preservation from '../Routes/Forms/Preservation/Preservation';
import Data from '../Routes/Forms/Data/Data';
import Emergency from '../Routes/Forms/Emergency/Emergency';

const Main = () => {
    return (
        <Router>
                <Routes>

                    {/* route for the Login component */}
                    <Route path="/" element={<Login />} />

                    {/* route for the Home component */}
                    <Route path="/home" element={<Home />} />

                    {/* route for the Preservation component */}
                    <Route path="/preservation-request" element={<Preservation />} />

                    {/* route for the Data component */}
                    <Route path="/data-request" element={<Data />} />

                    {/* route for the Emergency component */}
                    <Route path="/emergency-request" element={<Emergency />} />


                </Routes>
        </Router>
    );
};


export default Main;
