import React, { useState } from 'react';
import classes from './AddUser.module.css';
import Card from '../components/UI/Card'; //newly created component
import Button from './UI/Button'; //newly created component
import ErrorModel from './UI/ErrorModel';

const FormInput = (props) => {
	const [enteredName, setEnteredName] = useState('');
	const [enteredAge, setEnteredAge] = useState('');
	const [error, setError] = useState();

	const submitFormHandler = (event) => {
		event.preventDefault();
		if (+enteredAge <= 0 || +enteredAge > 100) {
			//plussign convert string to number in react js
			setError({
				title: 'wrong age entered',
				message: 'Enter age above 0 and less than 100',
			});
			setEnteredAge('');
			return;
		}
		props.formInput(enteredName, enteredAge);
		setEnteredAge('');
		setEnteredName('');
	};
	const okayHandler = () => {
		setError(null);
	};
	return (
		<div>
			{error && <ErrorModel error={error} okayHandler={okayHandler} />}
			<Card className={classes.input}>
				<form>
					<div>
						<label htmlFor='username'> Name </label>
						<input
							id='username'
							type='text'
							onChange={(event) => setEnteredName(event.target.value)}
							value={enteredName}
						/>
						<label> Age </label>
						<input
							id='age'
							type='number'
							onChange={(event) => setEnteredAge(event.target.value)}
							value={enteredAge}
						/>
						<Button
							type='button'
							onClick={submitFormHandler}
							disabled={!enteredAge || !enteredName}
						>
							Submit
						</Button>
					</div>
				</form>
			</Card>
		</div>
	);
};

export default FormInput;
