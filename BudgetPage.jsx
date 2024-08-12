import React, { useState, useEffect } from 'react';
import { ref, onValue, set } from 'firebase/database';
import { database } from './firebase';
import './BudgetPage.css';

const BudgetPage = () => {
    const [budget, setBudget] = useState(0);

    useEffect(() => {
        const budgetRef = ref(database, 'budget');
        onValue(budgetRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                setBudget(data);
            }
        });
    }, []);

    const handleBudgetChange = (e) => {
        const newBudget = parseFloat(e.target.value);
        setBudget(newBudget);

        // Save the budget to Firebase
        const budgetRef = ref(database, 'budget');
        set(budgetRef, newBudget);
    };

    return (
        <div>
            <h2>Set Budget</h2>
            <input
                type="number"
                value={budget}
                onChange={handleBudgetChange}
            />
            <p>Your budget is: ₹{budget}</p>
        </div>
    );
};

export default BudgetPage;
