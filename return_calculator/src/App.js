import { useState } from 'react';
import FormCom from './components/Form/FormInput';
import HeaderCom from './components/Header/Header';
import TableCom from './components/Table/TableCom';

function App() {
	const [userInput, setUserInput] = useState(null);

	const calculateHandler = (incomingInput) => {
		setUserInput(incomingInput);
	};

	if (userInput) {
		const yearlyData = []; // per-year results

		let currentSavings = +userInput['current_savings'];
		const yearlyContribution = +userInput['yearly_contribution'];
		const expectedReturn = +userInput['expected_return'] / 100;
		const duration = +userInput['duration'];

		// The below code calculates yearly results (total savings, interest etc)
		for (let i = 0; i < duration; i++) {
			const yearlyInterest = currentSavings * expectedReturn;
			currentSavings += yearlyInterest + yearlyContribution;
			yearlyData.push({
				year: i + 1,
				yearlyInterest: yearlyInterest,
				savingsEndOfYear: currentSavings,
				yearlyContribution: yearlyContribution,
			});
			setUserInput(yearlyData);
		}

		console.log(userInput['current-savings']);
	}
	return (
		<div>
			<HeaderCom />
			<FormCom calculateHandler={calculateHandler} />
			{!userInput && (
				<p style={{ textAlign: 'center' }}>No results calculated yet </p>
			)}
			{userInput && (
				<TableCom
					yearlyData={userInput}
					initialInvestment={userInput['current-savings']}
				/>
			)}
		</div>
	);
}
export default App;
