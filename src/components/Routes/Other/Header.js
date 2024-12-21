// src/components/Routes/Other/Header/Header.js

import React from "react";
import "./Header.css";

const Header = () => {
    return (
        <div className="header-container">
            <header className="header">
                <div className="header-content">
                    <div className="logo">
                        <img 
                            src="/uploads/shield.svg"
                            className="logo"
                            alt="Company Logo"
                            aria-label="Logo"
                        />
                        <span className="title">CYBERSEC</span>
                    </div>
                    <div className="button-container">
                        <button className="help-button">Help Center</button>
                        <button className="download-button">Download</button>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;