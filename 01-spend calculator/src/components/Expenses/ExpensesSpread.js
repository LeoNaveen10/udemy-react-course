import './ExpensesSpread.css';
import Card from '../UI/Card';
import ExpensesFilter from '../ExpenseFilter/expenseFilter';
import React, { useState } from 'react';
import ExpenseList from './ExpenseList';
import ExpenseChart from './ExpenseChart';

function ExpenseSpread(props) {
	const [year, setYear] = useState('2023');

	const expenseFilter = (yearSelected) => {
		setYear(yearSelected);
	};

	const filteredExpenses = props.expenses.filter((expense) => {
		return expense.date.getFullYear().toString() === year;
	});

	return (
		<div>
			<Card className='expenses'>
				<ExpensesFilter selectedYear={year} expenseFilter={expenseFilter} />
				<ExpenseChart expenses={filteredExpenses} />
				<ExpenseList items={filteredExpenses} />
			</Card>
		</div>
	);
}

export default ExpenseSpread;
