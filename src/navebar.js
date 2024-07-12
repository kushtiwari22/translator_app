import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './navebar.css';

function Navbar({ username, wordRef }) {
    const navigate = useNavigate();
    const loginPage = () => {
        navigate('/');
    };
    const logoutPage = () => {
        navigate('/');
    };
    const handleClick = () => {
        wordRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className="headname">
            <h1 className='name'>Hello, {username ? username : 'BUDDY'}</h1>
            <div>
                <button className="login_logout_button" onClick={handleClick}>Word of the Day</button>
            </div>
            <div>
                <button className='login_logout_button' onClick={username ? logoutPage : loginPage}>
                    {username ? 'Logout' : 'Login'}
                </button>
            </div>
        </nav>
    );
}

export default Navbar;