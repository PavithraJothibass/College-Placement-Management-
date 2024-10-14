import React, { useState } from 'react';
import './StudentDetailsForm.css'; // Ensure you create this CSS file for styling

const StudentDetailsForm = () => {
    const [school, setSchool] = useState('');
    const [college, setCollege] = useState('');
    const [marks10, setMarks10] = useState(''); // Separate state for marks
    const [marks12, setMarks12] = useState(''); // Separate state for marks
    const [department, setDepartment] = useState(''); // State for department
    const [branch, setBranch] = useState(''); // State for branch
    const [year, setYear] = useState(''); // State for year
    const [cgpa, setCgpa] = useState(''); // State for CGPA
    const [extracurricular, setExtracurricular] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const studentDetails = {
            school,
            college,
            marks: {
                marks10,
                marks12,
            },
            department,
            branch,
            year,
            cgpa,
            extracurricular: extracurricular.split(',').map(item => item.trim()), // Convert string to array
        };

        try {
            const response = await fetch('http://localhost:5000/api/studentdetails', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(studentDetails),
            });

            const data = await response.json();
            if (response.ok) {
                setSuccessMessage('Details saved successfully!');
                setErrorMessage('');
                // Optionally reset the form
                setSchool('');
                setCollege('');
                setMarks10('');
                setMarks12('');
                setDepartment('');
                setBranch('');
                setYear('');
                setCgpa('');
                setExtracurricular('');
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
            <h2>Enter Educational and Personal Details</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>School:</label>
                    <input
                        type="text"
                        value={school}
                        onChange={(e) => setSchool(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>College:</label>
                    <input
                        type="text"
                        value={college}
                        onChange={(e) => setCollege(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>10th Marks:</label>
                    <input
                        type="number"
                        value={marks10}
                        onChange={(e) => setMarks10(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>12th Marks:</label>
                    <input
                        type="number"
                        value={marks12}
                        onChange={(e) => setMarks12(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Department:</label>
                    <input
                        type="text"
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Branch:</label>
                    <input
                        type="text"
                        value={branch}
                        onChange={(e) => setBranch(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Year:</label>
                    <input
                        type="text"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>CGPA:</label>
                    <input
                        type="text"
                        value={cgpa}
                        onChange={(e) => setCgpa(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Extracurricular Activities (comma separated):</label>
                    <textarea
                        value={extracurricular}
                        onChange={(e) => setExtracurricular(e.target.value)}
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

export default StudentDetailsForm;
