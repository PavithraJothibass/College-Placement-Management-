import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Homepage';
import AdminPage from './pages/AdminPage';
import StudentPage from './pages/StudentPage';
import RecruiterPage from './pages/RecruiterPage';
import AboutPage from './pages/AboutPage';
import RegisterPage from './pages/RegisterPage';
import RecruiterRegister from './pages/RecruiterRegister';
import RecruiterLogin from './pages/RecruiterLogin';
import LoginPage from './pages/LoginPage';
import StudentDetailsForm from './pages/StudentDetails'; // Import the new StudentDetailsForm component
import AdminDashboard from './pages/AdminDashboard';
import RecruiterDetailsForm from './pages/RecruiterDetailsForm';
import JobPosting from './pages/JobList'; // If it's in the 'pages' folder
import './App.css';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/admin" element={<AdminPage />} />
                    <Route path="/admin_dashboard" element={<AdminDashboard />} />
                    <Route path="/student" element={<StudentPage />} />
                    <Route path="/recruiter" element={<RecruiterPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/recruiter_register" element={<RecruiterRegister />} />
                    <Route path="/recruiter_login" element={<RecruiterLogin />} />
                    <Route path="/recruiterdetails" element={<RecruiterDetailsForm />} />
                    <Route path="/student-details" element={<StudentDetailsForm />} />
                    <Route path="jobs" element={<JobPosting />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
