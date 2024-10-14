import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AuthPage.css';

const RecruiterLoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(''); // Reset error state
        setLoading(true); // Set loading state

        const loginData = { username, password };

        try {
            const response = await fetch('http://localhost:5000/api/recruiters/recruiter_login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData),
            });

            const data = await response.json();
            console.log('Response:', response, 'Data:', data); // Log response

            if (response.ok) {
                console.log('Login successful:', data.message);
                localStorage.setItem('username', username); // Save username in localStorage
                navigate('/recruiter'); // Redirect to RecruiterPage
            } else {
                console.error('Login failed:', data.error);
                setError(data.error); // Show error message
            }
        } catch (error) {
            console.error('Error:', error);
            setError('An error occurred. Please try again.');
        } finally {
            setLoading(false); // Reset loading state
        }
    };

    return (
        <div className="auth-container">
            <h2>Recruiter Login</h2>
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" disabled={loading}>
                    {loading ? 'Logging in...' : 'Login'}
                </button>
            </form>
        </div>
    );
};

export default RecruiterLoginPage;
