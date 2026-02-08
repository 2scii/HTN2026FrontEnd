import React, { useState } from 'react';

const LoginForm = ({ onLoginSuccess }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Hardcoded username and password check
        const correctUsername = 'hacker';
        const correctPassword = 'htn2026';

        if (username === correctUsername && password === correctPassword) {
            const userData = {username: 'user'};
            console.log('Login successful! Calling onLoginSuccess')
            onLoginSuccess(userData);  // Login successful, update state
            setError('');
        } else {
            setError('Invalid username or password');
        }
    };

    return (
        <div className="login-form">
        
            <div className="login-box">
                <h2 className="login-header">Login</h2>
                <form onSubmit={handleSubmit}>

                    <div className="login-text">
                    <div className="input-box">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-box">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    </div>
                    <button className="login-button" type="submit">Login</button>
                    {error && <p className="error">{error}</p>}
                </form>
            </div>
        </div>
    );
};

export default LoginForm;