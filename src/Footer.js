import React from 'react';

export function Footer() {
    return (
        <footer>
            <p>Contact: <a href="mailto:kushagra22072006@gmail.com">kushtiwari@gmail.com</a></p>
            <div className="social-icons">
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <img src="/image 9.png" alt="Instagram" />
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <img src="/image 11.png" alt="Facebook" />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    <img src="/image 12.png" alt="LinkedIn" />
                </a>
            </div>
            <div className="container">
                <p>&copy; 2023 Your Name. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;