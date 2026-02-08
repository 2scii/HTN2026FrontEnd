import { useState } from 'react';
import LoginForm from '../components/Login';
import { useEffect } from 'react';

export  function Signup() {
const [isLoggedIn, setIsLoggedIn] = useState(false);  // Track login status
    const [ setUser] = useState(null);  // Store user data

      useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'));  // Get user from localStorage
        if (storedUser) {
            setIsLoggedIn(true);
            setUser(storedUser);
        }
    }, [setUser]);

    // Function to handle login success (triggered by LoginForm or SignUpPage)
    const onLoginSuccess = (userData) => {
        setIsLoggedIn(true);
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));  // Persist user data to localStorage
    };

    const onLogout = () => {
        setIsLoggedIn(false);  // Log out user
        setUser(null);          // Clear user data
        localStorage.removeItem('user');  // Remove user data from localStorage
    };


    return(
        <div>
            {isLoggedIn ? (
                <>
                  
                    <button onClick={onLogout}>Logout</button>
                </>
            ) : (

                     <LoginForm onLoginSuccess={onLoginSuccess} />
                
            )}

        </div>
    );
};