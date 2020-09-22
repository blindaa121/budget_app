import React, { useContext } from 'react';
import {GlobalContext} from '../context/GlobalState'

const Balance = () => {
    const {incomeTransactions, expenseTransactions} = useContext(GlobalContext)
    
    const totalIncome = incomeTransactions.reduce((a,b) => a + b.incomeAmount, 0).toFixed(2);
    const totalExpense = expenseTransactions.reduce((a,b) => a + b.expenseAmount, 0).toFixed(2);
    const totalBalance = (totalIncome - totalExpense).toFixed(2);

    return (
        <div className='balance'>
            <h2>Your Balance</h2>
            <h3>${totalBalance}</h3>
            <div className="income-expense">
                <div className="plus">
                    <h3>Income</h3>
                    <p>+${totalIncome}</p>
                </div>
                <div className="minus">
                    <h3>Expenses</h3>
                    <p>-${totalExpense}</p>
                </div>
            </div>
        </div>
    )
}

export default Balance
