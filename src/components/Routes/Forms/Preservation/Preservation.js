// src/components/Routes/Forms/Preservation/Preservation.js

import React, { useState } from "react";
import "./Preservation.css";
import Header from "../../Other/Header";

const Preservation = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        name: "",
        title: "",
        organization: "",
        phone: "",
        location: "",
        internalCaseRef: "",
        legalProcess: "",
        legalProcessSignedDate: "",
        requestDueDate: "",
        accounts: "",
        activityStartDate: "",
        activityEndDate: "",
        phoneNumber: "",
        additionalContext: "",
        files: [],
        isLawEnforcement: false
    });
    const [originalData, setOriginalData] = useState({ ...formData });

    const handleEditClick = () => {
        setIsEditing(true);
        setOriginalData({ ...formData }); // Save the original data for undo
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleFileChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            files: [...prevData.files, e.target.files[0]]
        }));
    };

    const handleApplyChanges = () => {
        // Here you would typically send the updated data to your server
        console.log("Changes applied:", formData);
        setIsEditing(false);
    };

    const handleUndo = () => {
        setFormData(originalData); // Restore original data
        setIsEditing(false);
    };

    return (
        <div>
            <Header />
            <div className="preservation-containers">
                <div className="preservation-section">
                    <div className="container-preservation">
                        <div className="pres-headi">
                            Requestor Information
                            <button className="edit-button" onClick={handleEditClick}>Edit</button>
                        </div>
                        <div className="pres-form">
                            <form className="user-info">
                                <div className="form-group">
                                    <label htmlFor="email">Email:</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        disabled={!isEditing}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name">Name:</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        disabled={!isEditing}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="title">Title:</label>
                                    <input
                                        type="text"
                                        id="title"
                                        name="title"
                                        value={formData.title}
                                        onChange={handleChange}
                                        required
                                        disabled={!isEditing}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="organization">Organization:</label>
                                    <input
                                        type="text"
                                        id="organization"
                                        name="organization"
                                        value={formData.organization}
                                        onChange={handleChange}
                                        required
                                        disabled={!isEditing}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Phone Number:</label>
                                    <input
                                        type="text"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        disabled={!isEditing}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="location">Location:</label>
                                    <input
                                        type="text"
                                        id="location"
                                        name="location"
                                        value={formData.location}
                                        onChange={handleChange}
                                        required
                                        disabled={!isEditing}
                                    />
                                </div>
                            </form>
                        </div>
                        {isEditing && (
                            <div className="action-buttons">
                                <button onClick={handleApplyChanges}>Apply Changes</button>
                                <button onClick={handleUndo}>Undo</button>
                            </div>
                        )}
                    </div>

                    <div className="pres-headi">
                        Preservation Request
                    </div>
                    <div className="pres-subheadi">
                        Please complete all fields below to request preservation of account records. We will take steps to preserve account records in connection with officer criminal investigations for 90 days pending our receipt of formal legal process. Additional information can be found in the WhatsApp Law Enforcement Guidelines.
                    </div>
                    <div className="pres-form">
                        <form className="preservation-request">
                            <div className="form-group">
                                <label htmlFor="internalCaseRef">Internal Case Reference Number:</label>
                                <input
                                    type="text"
                                    id="internalCaseRef"
                                    name="internalCaseRef"
                                    value={formData.internalCaseRef}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="legalProcess">Legal Process:</label>
                                <select
                                    id="legalProcess"
                                    name="legalProcess"
                                    value={formData.legalProcess}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Select one</option>
                                    <option value="subpoena">Subpoena</option>
                                    <option value="warrant">Warrant</option>
                                    <option value="courtOrder">Court Order</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="legalProcessSignedDate">Legal Process Signed Date:</label>
                                <input
                                    type="date"
                                    id="legalProcessSignedDate"
                                    name="legalProcessSignedDate"
                                    value={formData.legalProcessSignedDate}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="requestDueDate">Request Due Date:</label>
                                <input
                                    type="date"
                                    id="requestDueDate"
                                    name="requestDueDate"
                                    value={formData.requestDueDate}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="accounts">Accounts:</label>
                                <select
                                    id="accounts"
                                    name="accounts"
                                    value={formData.accounts}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Select one</option>
                                    <option value="whatsappUser ">WhatsApp User</option>
                                    <option value="whatsappGroup">WhatsApp Group</option>
                                    <option value="whatsappChannels">WhatsApp Channels</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="activityStartDate">Requesting Records Between:</label>
                                <input
                                    type="date"
                                    id="activityStartDate"
                                    name="activityStartDate"
                                    value={formData.activityStartDate}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    type="date"
                                    id="activityEndDate"
                                    name="activityEndDate"
                                    value={formData.activityEndDate}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phoneNumber">Phone Number:</label>
                                <input
                                    type="text"
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="files">Documentation:</label>
                                <input
                                    type="file"
                                    id="files"
                                    name="files"
                                    onChange={handleFileChange}
                                    multiple
                                    accept=".pdf,.jpg,.png"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="additionalContext">Additional Context:</label>
                                <textarea
                                    id="additionalContext"
                                    name="additionalContext"
                                    value={formData.additionalContext}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>
                                    <input
                                        type="checkbox"
                                        name="isLawEnforcement"
                                        checked={formData.isLawEnforcement}
                                        onChange={(e) => setFormData({ ...formData, isLawEnforcement: e.target.checked })}
                                    /> 
                                </label>
                                <span className="checkbox-text">
                                    I attest that I am a law enforcement agent or government employee authorized to request account records and all the information I have provided is accurate.
                                </span>
                               
                            </div>
                            
                                <button className="sbut-btn" type="submit" onClick={handleApplyChanges}>Submit</button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Preservation;