import { useState } from 'react';

function UserInput() {
	const [userInput, setUserInput] = useState({
		initialInvestment: 0,
		annualInvestment: 0,
		expectedReturn: 0,
		duration: 0,
	});

	function handleInputChange(e) {
        setUserInput({...userInput, [e.target.id] : +e.target.value})
    }

	return (
		<>
		<div id='user-input'>
			<label> INITIAL INVESTMENT</label>
			<input
				type='number'
				id='initialInvestment'
                value={userInput.initialInvestment}
				// placeholder={userInput.initialInvestment}
				onChange={handleInputChange}
			/>
            <label> ANNUAL INVESTMENT</label>
			<input
				type='number'
				id='annualInvestment'
                value={userInput.annualInvestment}
				// placeholder={userInput.annualInvestment}
				onChange={handleInputChange}
			/>
            <label> EXPECTED RETURN</label>
			<input
				type='number'
				id='expectedReturn'
                value={userInput.expectedReturn}
				// placeholder={userInput.expectedReturn}
				onChange={handleInputChange}
			/>
            <label> DURATION</label>
			<input
				type='number'
				id='duration'
                value={userInput.duration}
                // placeholder={userInput.duration}
				onChange={handleInputChange}
			/>
		</div>
		<OutputResult userInput={userInput}/>
		</>
	);
}
import OutputResult from './OutputResult';

export default UserInput;
