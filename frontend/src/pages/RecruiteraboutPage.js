import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './AboutPage.css'; // Import the CSS file for styling

const AboutPage = () => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible);
    };

    return (
        <div className="about-page">
            {/* Top Navigation Bar */}
            <header className="header">
                <div className="menu-icon" onClick={toggleMenu}>☰</div>
                <nav className="nav-bar">
                    <ul className="nav-list">
                        <li><Link to="/student" onClick={() => setIsMenuVisible(false)}>Home</Link></li>
                        <li><Link to="/about" onClick={() => setIsMenuVisible(false)}>About</Link></li>
                        <li><Link to="/recruiterdetails">AddInfo</Link></li> {/* Link to the new form */}
                        <li><Link to="/jobs" onClick={() => setIsMenuVisible(false)}>Job Post</Link></li>
                        <li><Link to="/apply" onClick={() => setIsMenuVisible(false)}>History</Link></li>
                    </ul>
                </nav>
            </header>

            {/* Full-page Menu */}
            {isMenuVisible && (
                <div className="full-menu">
                    <aside className="side-menu">
                        <h3>Account</h3>
                        <ul>
                            <li><Link to="/recruiter_register">Register</Link></li>
                            <li><Link to="/recruiter_login">Login</Link></li>
                        </ul>
                    </aside>
                </div>
            )}

            {/* Main Content */}
            <main className="about-content">
                <h1>About Us</h1>
                <p>
                    Welcome to the Placement Cell Management system! We are dedicated to helping students
                    achieve their career aspirations by providing access to job opportunities, interview
                    preparation, and a platform to connect with recruiters.
                </p>
                <p>
                    Our mission is to bridge the gap between students and employers, ensuring that
                    talented individuals find the right job fit for their skills and aspirations.
                </p>
                <p>
                    Join us in making your career dreams a reality!
                </p>
            </main>

            {/* Footer */}
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

export default AboutPage;
