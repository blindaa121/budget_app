import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer'

const initialState = {
  incomeTransactions: [
    { id: 1, incomeText: "Freelance job 1", incomeAmount: 1000 },
    { id: 2, incomeText: "Freelance job 2", incomeAmount: 5000 },
    { id: 3, incomeText: "Freelance job 3", incomeAmount: 9000 },
  ],
  expenseTransactions: [
    { id: 1, expenseText: "Rent", expenseAmount: 1000 },
    { id: 2, expenseText: "Phone bill", expenseAmount: 300 },
    { id: 3, expenseText: "Car payment", expenseAmount: 200 },
  ],
}

export const GlobalContext = createContext(initialState);

export const GlobalContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    const addIncome = incomeTransaction => {
        dispatch({
            type: 'ADD_INCOME',
            payload: incomeTransaction
        })
    }

    const addExpense = expenseTransaction => {
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expenseTransaction
        })
    }

    const deleteTransaction = (id) => {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }

    return (
        <GlobalContext.Provider value={{
            incomeTransactions: state.incomeTransactions,
            expenseTransactions: state.expenseTransactions,
            addIncome,
            addExpense,
            deleteTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )
}