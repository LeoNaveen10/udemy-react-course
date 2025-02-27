import './ExpenseList.css';
import ExpenseReport from './ExpenseReport';

const ExpenseList = (props) => {
	if (props.items.length === 0) {
		return <h2 className='expenses-list__fallback'>Noting to display</h2>;
	}
	return (
		<ul className='expenses-list'>
			{props.items.map((filterExpense) => (
				<ExpenseReport
					key={filterExpense.id} //key is used to render unique datas, to avoid the warnings
					title={filterExpense.input}
					amount={filterExpense.price}
					date={filterExpense.date}
				/>
			))}
		</ul>
	);
};

export default ExpenseList;
