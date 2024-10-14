import React, { useState, useEffect } from 'react';
import { useNavigate, Outlet, Link } from 'react-router-dom';
import './StudentPage.css';

const StudentPage = () => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const [isSubmenuVisible, setIsSubmenuVisible] = useState(false);
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
            setUsername(storedUsername);
        } else {
            navigate('/student'); // Redirect to login if no username found
        }
    }, [navigate]);

    const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible);
        if (isMenuVisible) setIsSubmenuVisible(false);
    };

    const handleLogout = () => {
        localStorage.removeItem('username'); // Clear username from localStorage
        navigate('/'); // Redirect to login page
    };

    const motivationalQuotes = [
        "🌟 'The future belongs to those who believe in the beauty of their dreams.' - Eleanor Roosevelt",
        "You are on the path to success, armed with knowledge and ambition. Every challenge is an opportunity in disguise.",
        "💪 'Success is not final, failure is not fatal: It is the courage to continue that counts.' - Winston S. Churchill",
        "Remember, every step you take brings you closer to your goals. Embrace learning, seek opportunities, and connect with mentors.",
        "🚀 'Your limitation—it's only your imagination. Push yourself, because no one else is going to do it for you.'",
        "Keep pushing forward, and let your passion drive you. The sky is the limit!",
    ];

    return (
        <div className="student-page">
            <header className="header">
                <div className="menu-icon" onClick={toggleMenu}>☰</div>
                <nav className="nav-bar">
                    <ul className="nav-list">
                        <li>
                            <Link to="#home" onClick={() => { setIsMenuVisible(false); setIsSubmenuVisible(false); }}>Home</Link>
                        </li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/student-details">AddInfo</Link></li> {/* Link to the new form */}
                        <li>
                        <li><Link to="JobList" onClick={() => setIsSubmenuVisible(false)}>Job List</Link></li>
                        </li>
                        <li><Link to="/history">history</Link></li>

                    </ul>
                </nav>
            </header>

            {isMenuVisible && (
                <div className="full-menu">
                    <aside className="side-menu">
                        <h3>Account</h3>
                        <ul>
                            <li><Link to="/register">Register</Link></li>
                            <li><Link to="/login">Login</Link></li>
                            <li><button onClick={handleLogout}>Logout</button></li>
                        </ul>
                    </aside>
                </div>
            )}

            <main className="main-content">
                <h1>Welcome{username ? `, ${username}` : ''}!</h1>
                <ul className="quote-list">
                    {motivationalQuotes.map((quote, index) => (
                        <li key={index}>{quote}</li>
                    ))}
                </ul>
                <Outlet /> {/* Render child routes here */}
            </main>

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

export default StudentPage;
