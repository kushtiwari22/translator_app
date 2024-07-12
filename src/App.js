import React, { useState, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './login';
import Navbar from './navebar';
import Middle from './Middle';
import Footer from './Footer';
import './App.css';

function App() {
    const [username, setUsername] = useState('');
    const wordRef = useRef(null);

    const handleLoginSubmit = (submittedUsername) => {
        setUsername(submittedUsername);
    };

    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Login onSubmit={handleLoginSubmit} />} />
                    <Route
                        path="/home"
                        element={
                            <>
                                <Navbar username={username} wordRef={wordRef} />
                                <Middle ref={wordRef} />
                                <Footer />
                            </>
                        }
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;