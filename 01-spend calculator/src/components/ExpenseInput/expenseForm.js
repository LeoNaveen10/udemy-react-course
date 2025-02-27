import './expenseForm.css';
import React, { useState } from 'react';

const ExpenseForm = (props) => {
	const [enteredInput, setEnteredInput] = useState('');
	const [enteredPrice, setEnteredPrice] = useState('');
	const [enteredDate, setEnteredDate] = useState('');

	// const [enteredInputObj, setEnteredInputObj] = useState({
	// 	enteredDate: '',
	// 	enteredInput: '',
	// 	enteredPrice: '',
	// });

	const enteredInputHandler = (event) => {
		setEnteredInput(event.target.value);

		//1st method to setting value using object in states
		// setEnteredInputObj({
		// 	...enteredInputObj,
		// 	enteredInput: event.target.value,
		// });

		//2nd method to setting value with previous state(recommended)
		// setEnteredInputObj((prevState) => {
		// 	return { ...prevState, setEnteredInput: event.target.value };
		// });
	};
	const enteredPriceHandler = (event) => {
		setEnteredPrice(event.target.value);
		// setEnteredInputObj({
		// 	...enteredInputObj,
		// 	enteredPrice: event.target.value,
		// });
	};
	const enteredDateHandler = (event) => {
		setEnteredDate(event.target.value);
		// setEnteredInputObj({
		// 	...enteredInputObj,
		// 	enteredDate: event.target.value,
		// });
	};

	const submitHandler = (event) => {
		event.preventDefault();
		const finalValue = {
			id: Math.random(),
			date: new Date(enteredDate),
			input: enteredInput,
			price: +enteredPrice, //convert into integer / 1) Number(enteredPrice) / 2) value *1
		};
		props.onEnteredExpense(finalValue);
		setEnteredDate('');
		setEnteredInput('');
		setEnteredPrice('');
	};
	return (
		<form onSubmit={submitHandler}>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label> Title </label>
					<input
						type='text'
						value={enteredInput}
						onChange={enteredInputHandler}
					/>
				</div>
				<div className='new-expense__control'>
					<label> Price </label>
					<input
						type='number'
						min='0.01'
						step='0.01'
						value={enteredPrice}
						onChange={enteredPriceHandler}
					/>
				</div>
				<div className='new-expense__control'>
					<label> Date </label>
					<input
						type='date'
						min='2019.01.01'
						max='2022.12.31'
						value={enteredDate}
						onChange={enteredDateHandler}
					/>
				</div>
				<div className='new-expense__actions'>
					<button type='button' onClick={props.onCancel}>
						Cancel
					</button>
					<button type='submit' onClick={submitHandler}>
						Add Expense
					</button>
				</div>
			</div>
		</form>
	);
};
export default ExpenseForm;
