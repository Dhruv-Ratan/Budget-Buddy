import React from 'react'
import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import HomePage from './HomePage.jsx'
import ExpensesPage from './ExpensesPage.jsx'
import BudgetPage from './BudgetPage.jsx'
import SavingsPage from './SavingsPage.jsx'
import InvestmentsPage from './InvestmentsPage.jsx'
import GoalsPage from './GoalsPage.jsx'

function App() {

  return (
    <BrowserRouter> 
      <Routes>
        <Route path='/' exact Component={HomePage} />
        <Route path='/expenses' Component={ExpensesPage} />
        <Route path='/budget' Component={BudgetPage} />
        <Route path='/savings' Component={SavingsPage} />
        <Route path='/investments' Component={InvestmentsPage} />
        <Route path='/goals' Component={GoalsPage} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
