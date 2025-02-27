import { calculateInvestmentResults } from '../util/investment';

function OutputResult({ userInput }) {
	const finalResult =
		userInput?.initialInvestment > 0 &&
		userInput?.annualInvestment > 0 &&
		userInput?.expectedReturn > 0 &&
		userInput?.duration > 0
			? calculateInvestmentResults(userInput)
			: [];

	const calculateTotalInterest = (results) => {
		let totalInterest = 0;
		return results.reduce((acc, current) => {
			acc += current.interest;
			return acc;
		}, totalInterest);
	};

	return (
			<div id='result'>
				{finalResult.length > 0 && (
					<table>
						<thead id='thead'>
							<tr>
								<th>Year</th>
								<th>Investment Value</th>
								<th>Interest (Year)</th>
								<th>Total Interest</th>
								<th>Invested Capital</th>
							</tr>
						</thead>
						{finalResult.map((result) => (
							<tr id='tbody' key={result.year}>
								<td>{result.year}</td>
								<td>{result.annualInvestment.toFixed(2)}</td>
								<td>{result.interest.toFixed(2)}</td>
								<td>
									{/** This will slice the values from 1st element to the current year and calculate the total interset */}
									{calculateTotalInterest(finalResult.slice(0, result.year)).toFixed(2)}
								</td>
								<td>{result.valueEndOfYear.toFixed(2)}</td>
							</tr>
						))}
					</table>
				)}
			</div>
	);
}

export default OutputResult;
