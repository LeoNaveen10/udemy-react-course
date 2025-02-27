import React from 'react';
import ChartVisuals from '../chart/chart';

const ExpenseChart = (props) => {
	const dataPointsForChart = [
		{ month: 'Jan', value: 0 },
		{ month: 'Feb', value: 0 },
		{ month: 'Mar', value: 0 },
		{ month: 'Apr', value: 0 },
		{ month: 'May', value: 0 },
		{ month: 'Jun', value: 0 },
		{ month: 'July', value: 0 },
		{ month: 'Aug', value: 0 },
		{ month: 'Sep', value: 0 },
		{ month: 'Oct', value: 0 },
		{ month: 'Nov', value: 0 },
		{ month: 'Dec', value: 0 },
	];
	for (const expense of props.expenses) {
		dataPointsForChart[expense.date.getMonth()].value += expense.price;
	}
	return <ChartVisuals dataPoints={dataPointsForChart} />;
};

export default ExpenseChart;
