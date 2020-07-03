import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';
  

const Header = props => {
    return (
        <Router>
            <nav className="header">
                <ul>
                    <li><Link to={'./'}>Home</Link></li>
                    <li><Link to={'./about'}>About</Link></li>
                    <li><Link to={'./work'}>Work</Link></li>
                    <li><Link to={'./blog'}>Blog</Link></li>
                </ul>
            </nav>
        </Router>
        
    );
};

export default Header;