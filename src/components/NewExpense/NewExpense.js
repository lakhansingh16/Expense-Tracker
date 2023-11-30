import React,{useState} from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [isEditing,setIsEditing] = useState(false);
  const startIsEditing = ()=>{
    setIsEditing(true);
  }

  const stopIsEditing=()=>{
    setIsEditing(false);
  }
  const expenseDataHandler = (enteredExpenseData)=>{
    const expense = {
        ...enteredExpenseData,
        id:Math.random().toString()
    }
    props.onAddExpense(expense);
  }
  return (
    <div className='new-expense'>
      {!isEditing && <button onClick={startIsEditing}>Add New Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={expenseDataHandler} onCancel={stopIsEditing} />}
    </div>
  );
};

export default NewExpense;