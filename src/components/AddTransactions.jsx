import React, {useState, useContext} from 'react';
import { uuid } from 'uuidv4';
import {GlobalContext} from '../context/GlobalState'

const AddTransactions = () => {
    const {addIncome, addExpense} = useContext(GlobalContext)

    const [income, setIncome] = useState({
        incomeText: '',
        incomeAmount: 0
    })

    const [expense, setExpense] = useState({
        expenseText: '',
        expenseAmount: 0
    })

    const {incomeText, incomeAmount} = income;
    const {expenseText, expenseAmount} = expense;

    const onChangeIncome = e => {
        setIncome({...income, [e.target.name]: e.target.value});
        console.log(income)
    }

    const onChangeExpense = e => {
        setExpense({...expense, [e.target.name]: e.target.value});
        console.log(expense)
    }

    const onSubmitIncome = e => {
        e.preventDefault();

        if (incomeText !== '') {
            const newIncomeTransaction = {
              id: uuid(),
              incomeText,
              incomeAmount: incomeAmount * 1,
            };

            addIncome(newIncomeTransaction);

            setIncome({
              incomeText: "",
              incomeAmount: 0,
            });
        }
        
    }

    const onSubmitExpense = e => {
        e.preventDefault();

        if (expenseText !== '') {
            const newExpenseTransaction = {
                id: uuid(),
                expenseText,
                expenseAmount: expenseAmount * 1
            }

            console.log(newExpenseTransaction);

            addExpense(newExpenseTransaction);

            setExpense({
                expenseText: '',
                expenseAmount: 0
            })
        }
    }

    return (
      <div className="form-wrapper">
        <form onSubmit={onSubmitIncome}>
          <div className="input-group income">
            <input
              type="text"
              name="incomeText"
              value={incomeText}
              placeholder="Add Income.."
              autoComplete="off"
              onChange={onChangeIncome}
            />
            <input
              type="number"
              name="incomeAmount"
              value={incomeAmount}
              placeholder="Amount"
              autoComplete="off"
              onChange={onChangeIncome}
            />
            <input type="submit" value="Submit" />
          </div>
        </form>
        <form onSubmit={onSubmitExpense}>
          <div className="input-group expense">
            <input
              type="text"
              name="expenseText"
              value={expenseText}
              onChange={onChangeExpense}
              placeholder="Add Expense.."
              autoComplete="off"
            />
            <input
              type="number"
              name="expenseAmount"
              value={expenseAmount}
              onChange={onChangeExpense}
              placeholder="Amount"
              autoComplete="off"
            />
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
}

export default AddTransactions
