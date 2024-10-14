import React, { useState } from 'react';
import './RecruiterDetailsForm.css'; // Ensure you create this CSS file for styling

const RecruiterDetailsForm = () => {
    const [officeName, setOfficeName] = useState('');
    const [overallEmployees, setOverallEmployees] = useState('');
    const [gstNo, setGstNo] = useState('');
    const [overallProjects, setOverallProjects] = useState('');
    const [address, setAddress] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const recruiterDetails = {
            officeName,
            overallEmployees,
            gstNo,
            overallProjects,
            address,
            contactNumber,
        };

        try {
            const response = await fetch('http://localhost:5000/api/recruiterdetails', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(recruiterDetails),
            });

            const data = await response.json();
            if (response.ok) {
                setSuccessMessage('Details saved successfully!');
                setErrorMessage('');
                // Optionally reset the form
                setOfficeName('');
                setOverallEmployees('');
                setGstNo('');
                setOverallProjects('');
                setAddress('');
                setContactNumber('');
            } else {
                setErrorMessage('Error saving details: ' + data.error);
                setSuccessMessage('');
            }
        } catch (error) {
            setErrorMessage('Error: ' + error.message);
            setSuccessMessage('');
        }
    };

    return (
        <div className="form-container">
            <h2>Enter Recruiter Details</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Office Name:</label>
                    <input
                        type="text"
                        value={officeName}
                        onChange={(e) => setOfficeName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Overall Employees:</label>
                    <input
                        type="number"
                        value={overallEmployees}
                        onChange={(e) => setOverallEmployees(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>GST Number:</label>
                    <input
                        type="text"
                        value={gstNo}
                        onChange={(e) => setGstNo(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Overall Projects:</label>
                    <textarea
                        value={overallProjects}
                        onChange={(e) => setOverallProjects(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Address:</label>
                    <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Contact Number:</label>
                    <input
                        type="text"
                        value={contactNumber}
                        onChange={(e) => setContactNumber(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Save Details</button>
            </form>

            {successMessage && <p className="success-message">{successMessage}</p>}
            {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
    );
};

export default RecruiterDetailsForm;
