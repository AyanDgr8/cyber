// src/components/Routes/Home/Home.js

import React from "react";
import "./Home.css";
import Header from "../Other/Header";

const Home = () => {
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
                            <button className="block-button blue-bt">Submit Request </button>
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
                            <button className="block-button green-bt">Submit Request </button>
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
                            <button className="block-button red-bt">Submit Request </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Home;