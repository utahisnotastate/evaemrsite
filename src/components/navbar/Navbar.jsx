import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                EVA EMR
            </div>
            <div className="navbar-right">
                <button className="disabled-button" disabled>
                    Demo (coming soon)
                </button>
            </div>
        </nav>
    );
}

export default Navbar;