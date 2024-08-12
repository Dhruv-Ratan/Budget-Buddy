// src/GoalsPage.js
import React, { useState, useEffect } from 'react';
import { ref, onValue, set } from 'firebase/database';
import { database } from './firebase';
import './GoalsPage.css';

const GoalsPage = () => {
    const [goals, setGoals] = useState([]);
    const [goalName, setGoalName] = useState('');
    const [goalAmount, setGoalAmount] = useState('');

    useEffect(() => {
        const goalsRef = ref(database, 'goals');
        onValue(goalsRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const loadedGoals = Object.values(data);
                setGoals(loadedGoals);
            }
        });
    }, []);

    const addGoal = (e) => {
        e.preventDefault();
        if (goalName && goalAmount) {
            const newGoal = { name: goalName, amount: parseFloat(goalAmount) };
            setGoals([...goals, newGoal]);
            
            // Save the goal to Firebase
            const goalRef = ref(database, 'goals/' + goalName);
            set(goalRef, newGoal);
            
            setGoalName('');
            setGoalAmount('');
        } else {
            alert('Please enter both goal name and amount.');
        }
    };

    return (
        <div>
            <h2>Set Financial Goals</h2>
            <form onSubmit={addGoal}>
                <div>
                    <label>Goal Name: </label>
                    <input
                        type="text"
                        value={goalName}
                        onChange={(e) => setGoalName(e.target.value)}
                    />
                </div>
                <div>
                    <label>Goal Amount: </label>
                    <input
                        type="number"
                        value={goalAmount}
                        onChange={(e) => setGoalAmount(e.target.value)}
                    />
                </div>
                <button type="submit">Add Goal</button>
            </form>
            <h3>Goals List</h3>
            <ul>
                {goals.map((goal, index) => (
                    <li key={index}>
                        {goal.name}: ₹{goal.amount.toFixed(2)}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GoalsPage;
