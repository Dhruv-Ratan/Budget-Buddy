// HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
    return (
        <div>
            <h1>Welcome to Budget Buddy</h1>
            <nav>
                <ul>
                    <li><Link to="/expenses">Track Expenses</Link></li>
                    <li><Link to="/budget">Set Budget</Link></li>
                    <li><Link to="/savings">Track Savings</Link></li>
                    <li><Link to="/investments">Monitor Investments</Link></li>
                    <li><Link to="/goals">Set Financial Goals</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default HomePage;
