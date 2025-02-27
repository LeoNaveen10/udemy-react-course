// import ExpenseReport from "./components/ExpenseReport";
import ExpenseSpread from './components/Expenses/ExpensesSpread';
import ExpenseInput from './components/ExpenseInput/expenseInput';
import React, { useState } from 'react';

function App() {
	const dummyValues = [
		{
			id: 'e1',
			input: 'Toilet Paper',
			price: 94.12,
			date: new Date(2023, 7, 14),
		},
		{ id: 'e2', input: 'New TV', price: 799.49, date: new Date(2021, 2, 12) },
		{
			id: 'e3',
			input: 'Car Insurance',
			price: 294.67,
			date: new Date(2021, 2, 28),
		},
		{
			id: 'e4',
			input: 'New Desk (Wooden)',
			price: 450,
			date: new Date(2021, 5, 12),
		},
	];
	const [expenses, setExpenses] = useState(dummyValues);
	const enteredInputs = (value) => {
		setExpenses((prevState) => {
			return [value, ...prevState];
		});
	};
	return (
		<div>
			<ExpenseInput onEnteredInputs={enteredInputs} />
			<ExpenseSpread expenses={expenses} />
		</div>
	);
}

export default App;
