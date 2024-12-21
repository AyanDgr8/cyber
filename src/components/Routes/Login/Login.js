// src/components/Routes/Login/Login.js

import React, { useState } from "react";
import "./Login.css";
import Header from "../Other/Header";

const Login = () => {
    const [agreed, setAgreed] = useState(false);
    const [showEmailDialog, setShowEmailDialog] = useState(false);
    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [notification, setNotification] = useState(null);

    const handleRequestAccess = () => {
        setShowEmailDialog(true);
    };

    const handleSubmitEmail = () => {
        setIsSubmitting(true);
        // Simulate email submission logic
        setTimeout(() => {
            setIsSubmitting(false);
            setShowEmailDialog(false);
            setNotification({ type: 'success', message: 'Email sent successfully!' });
        }, 2000); // Simulate a network request
    };

    return (
        <div className="login-container">
            <Header />
            <main className="main-content">
                <div className="request-card">
                    <div className="request-header">
                        <h1 className="request-title">
                            Law Enforcement Online Requests
                        </h1>
                    </div>

                    <div className="request-body">
                        <div className="request-info">
                            <h2 className="request-subtitle">
                                Request Secure Access to the Law Enforcement Online Request System
                            </h2>

                            <div className="request-description">
                                <p className="description-text">
                                    We disclose account records solely in accordance with our terms of service and applicable law.
                                </p>
                                <p className="description-text">
                                    If you are a law enforcement agent who is authorized to gather evidence in connection with an official investigation, you may request records from CYBERSEC through this system.
                                </p>
                            </div>

                            <div className="checkbox-container">
                                <input
                                    id="agreement"
                                    type="checkbox"
                                    checked={agreed}
                                    onChange={(e) => setAgreed(e.target.checked)}
                                    className="checkbox-input"
                                />
                                <label htmlFor="agreement" className="checkbox-label">
                                    I am an authorized law enforcement agent or government employee investigating an emergency, and this is an official request.
                                </label>
                            </div>

                            <div>
                                <button
                                    onClick={handleRequestAccess}
                                    disabled={!agreed}
                                    className="request-button"
                                >
                                    <img 
                                        src="/uploads/lock.svg"
                                        className="lock-icon"
                                        alt="Lock icon"
                                        aria-label="Lock"
                                    />
                                    REQUEST ACCESS
                                </button>
                            </div>

                            <div className="warning-text">
                                <p>
                                    Warning: Requests to CYBERSEC through this system may be made only by governmental entities authorized to obtain evidence in connection with official legal proceedings pursuant to Title 18, United States Code, Sections 2703 and 2711. Unauthorized requests will be subject to prosecution.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Email Dialog */}
                {showEmailDialog && (
                    <div className="email-dialog">
                        <div className="dialog-content">
                            <div className="dialog-header">
                                <h2 className="request-subtitlee">Request Access</h2>
                                <button onClick={() => setShowEmailDialog(false)} className="close-button">
                                    <svg className="close-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <div className="dialog-body">
                                <label htmlFor="email" className="email-label">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Email address"
                                    className="email-input"
                                />
                                <p className="email-description">
                                    Enter your email address to receive a unique link to the Law Enforcement Request System. The link will give you access to the system for one hour.
                                </p>
                            </div>
                            < div className="dialog-footer">
                                <button onClick={handleSubmitEmail} disabled={isSubmitting} className="submit-button">
                                    {isSubmitting ? 'Sending...' : 'Send Email'}
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Notification */}
                {notification && (
                    <div className={`notification ${notification.type}`}>
                        {notification.message}
                    </div>
                )}
            </main>
        </div>
    );
};

export default Login;