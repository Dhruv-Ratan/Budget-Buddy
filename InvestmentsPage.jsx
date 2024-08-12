import React, { useState, useEffect } from 'react';
import { ref, onValue, set } from 'firebase/database';
import { database } from './firebase';
import './InvestmentsPage.css';

const InvestmentsPage = () => {
    const [investments, setInvestments] = useState([]);
    const [investmentName, setInvestmentName] = useState('');
    const [investmentAmount, setInvestmentAmount] = useState('');

    useEffect(() => {
        const investmentsRef = ref(database, 'investments');
        onValue(investmentsRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const loadedInvestments = Object.values(data);
                setInvestments(loadedInvestments);
            }
        });
    }, []);

    const addInvestment = (e) => {
        e.preventDefault();
        if (investmentName && investmentAmount) {
            const newInvestment = { name: investmentName, amount: parseFloat(investmentAmount) };
            setInvestments([...investments, newInvestment]);

            // Save the investment to Firebase
            const investmentRef = ref(database, 'investments/' + investmentName);
            set(investmentRef, newInvestment);

            setInvestmentName('');
            setInvestmentAmount('');
        }
    };

    return (
        <div>
            <h2>Monitor Investments</h2>
            <form onSubmit={addInvestment}>
                <div>
                    <label>Investment Name: </label>
                    <input
                        type="text"
                        value={investmentName}
                        onChange={(e) => setInvestmentName(e.target.value)}
                    />
                </div>
                <div>
                    <label>Investment Amount: </label>
                    <input
                        type="number"
                        value={investmentAmount}
                        onChange={(e) => setInvestmentAmount(e.target.value)}
                    />
                </div>
                <button type="submit">Add Investment</button>
            </form>
            <h3>Investments List</h3>
            <ul>
                {investments.map((investment, index) => (
                    <li key={index}>
                        {investment.name}: ₹{investment.amount.toFixed(2)}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default InvestmentsPage;
