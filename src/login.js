import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

function Login({ onSubmit }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [popupText, setPopupText] = useState('');
  const navigate = useNavigate();

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (password !== '1234') {
      setPopupText('Incorrect password');
      setShowPopup(true);
      setEmail('');
      setPassword('');
      setTimeout(() => {
        setShowPopup(false);
      }, 2000);
    } else {
      setPopupText('Login successful');
      onSubmit(username);
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
        navigate('/home');
      }, 2000);
    }
  };

  const handleSkip = () => {
    navigate('/home');
  };

  return (
    <div className="login_page">
      <h2>Login</h2>
      <div className="loginbox">
        <form onSubmit={handleLoginSubmit}>
          <div>
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Submit</button>
          <button className="skipbutton" type="button" onClick={handleSkip}>Skip</button>
        </form>

        {showPopup && (
          <div className="popup">
            <h2>{popupText}</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
