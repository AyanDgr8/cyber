// src/components/Routes/Home/Home.js

import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import Header from "../Other/Header";

const Home = () => {

    const navigate = useNavigate(); // Initialize useNavigate

    // Function to handle navigation to preservation
    const handlePreserveClick = () => {
        navigate('/preservation-request');
    };

    // Function to handle navigation to data
    const handleDataClick = () => {
        navigate('/data-request');
    };

    // Function to handle navigation to emergency
    const handleEmergencyClick = () => {
        navigate('/emergency-request');
    };

    return(
        <div>
            <Header />
            <div className="home-container">
                <div className="home-title">
                    <h1 className="home-head-1">Law Enforcement Request Portal</h1>
                    <h4 className="home-head-2">Select the type of request you would like to submit </h4>
                </div>
                <div className="three-blocks">
                    <div className="home-block">
                        <div className="logo-headi">
                            <img 
                                src="/uploads/preserve.svg" 
                                className="home-logos" 
                                alt="preserve"
                            />
                            <div className="block-title">
                                Preservation Request
                            </div>
                        </div>

                        <div className="block-subtitle">
                            Request data preservation for ongoing investigations
                        </div>

                        <div className="block-btn">
                            <button className="block-button blue-bt" onClick={handlePreserveClick}>Submit Request </button>
                        </div>
                    </div>

                    <div className="home-block">
                        <div className="logo-headi">
                            <img 
                                src="/uploads/data.svg" 
                                className="home-logos" 
                                alt="data"
                            />
                            <div className="block-title">
                                Data Request
                            </div>
                        </div>

                        <div className="block-subtitle">
                            Submit requests for specific data or records
                        </div>

                        <div className="block-btn">
                            <button className="block-button green-bt" onClick={handleDataClick}>Submit Request </button>
                        </div>
                    </div>

                    <div className="home-block">
                        <div className="logo-headi">
                            <img 
                                src="/uploads/emergency.svg" 
                                className="home-logos" 
                                alt="emergency"
                            />
                            <div className="block-title">
                                Emergency Request
                            </div>
                        </div>

                        <div className="block-subtitle">
                            Urgent requests requiring immediate attention
                        </div>

                        <div className="block-btn">
                            <button className="block-button red-bt" onClick={handleEmergencyClick}>Submit Request </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Home;