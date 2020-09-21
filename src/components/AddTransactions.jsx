import React from 'react';

const AddTransactions = () => {
    return (
        <div className='form-wrapper'>
            <form action="">
                <div className="input-group income">
                    <input type="text" placeholder="Add Income.." autocomplete='off'/>
                    <input type="number" placeholder="Amount" autocomplete='off'/>
                    <input type="submit" value='Submit'/>
                </div>
            </form>
            <form action="">
                <div className="input-group expense">
                    <input type="text" placeholder="Add Expense.." autocomplete='off'/>
                    <input type="number" placeholder="Amount" autocomplete='off'/>
                    <input type="submit" value='Submit'/>
                </div>
            </form>
        </div>
    )
}

export default AddTransactions
