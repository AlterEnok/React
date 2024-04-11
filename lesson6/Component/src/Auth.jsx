import React, { useState } from 'react';
import Login from './Login';
import Logout from './Logout';
import Spinner from './Spinner';


const Auth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoggingIn, setIsLoggingIn] = useState(false);

    const handleLogin = () => {
        setIsLoggingIn(true);
        setTimeout(() => {
            setIsAuthenticated(true);
            setIsLoggingIn(false);
        }, 2000);
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
    };

    return (
        <div>
            {isAuthenticated ? (
                <Logout onLogout={handleLogout} />
            ) : (
                <>
                    {isLoggingIn ? (
                        <Spinner size="24px" />
                    ) : (
                        <Login onLogin={handleLogin} />
                    )}
                </>
            )}
        </div>
    );
};

export default Auth;
