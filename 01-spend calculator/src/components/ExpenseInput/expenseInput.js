import React, { useState } from 'react';
import ExpenseForm from './expenseForm';
import './expenseInput.css';

function ExpenseInput(props) {
	const [isEditing, setIsEditing] = useState(false);
	const enteredExpenseHandler = (finalValue) => {
		// const newExpenseEntered = (prevState) => {
		// 	return [finalValue, ...prevState];
		// };
		props.onEnteredInputs(finalValue);
		setIsEditing(true);
	};
	const cancelEditing = () => {
		setIsEditing(false);
	};
	const startEditing = () => {
		setIsEditing(true);
	};
	return (
		<div className='new-expense'>
			{!isEditing && <button onClick={startEditing}> ADD Expenses</button>}
			{isEditing && (
				<ExpenseForm
					onEnteredExpense={enteredExpenseHandler}
					onCancel={cancelEditing}
				/>
			)}
		</div>
	);
}

export default ExpenseInput;
