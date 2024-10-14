import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';

const HomePage = () => {
    return (
        <div className="homepage">
            <header className="header">
                <h1>"Unlock Your Career Potential: Join the Placement Cell Community!"</h1>
                <h1>Welcome to the Placement Cell Management</h1>
            </header>

            <section className="features">
                <div className="feature">
                    <Link to="/student">
                        <img src="/student.png" alt="Students" className="role-image" />
                        <h2>Student</h2>
                    </Link>
                    <p>Explore job opportunities, prepare for interviews, and connect with recruiters.</p>
                </div>
                <div className="feature">
                    <Link to="/recruiter">
                        <img src="/recruiter.png" alt="Recruiters" className="role-image" />
                        <h2>Recruiter</h2>
                    </Link>
                    <p>Find the best talents, schedule interviews, and manage job postings seamlessly.</p>
                </div>
                <div className="feature">
                    <Link to="/admin">
                        <img src="/admin.png" alt="Admins" className="role-image" />
                        <h2>Admin</h2>
                    </Link>
                    <p>Oversee placement activities, manage user accounts, and generate reports effortlessly.</p>
                </div>
            </section>

            <footer className="footer">
                <p>Contact Us:</p>
                <p>Email: info@placementcell.com</p>
                <p>Phone: (123) 456-7890</p>
                <p>Address: 123 Placement St, Career City, State, ZIP</p>
                <p>&copy; {new Date().getFullYear()} Placement Cell Management</p>
            </footer>
        </div>
    );
};

export default HomePage;
