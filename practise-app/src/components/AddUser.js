import React, { useState, useRef } from 'react';
import classes from './AddUser.module.css';
import Card from '../components/UI/Card'; //newly created component
import Button from './UI/Button'; //newly created component
import ErrorModel from './UI/ErrorModel';

const FormInput = (props) => {
	const enteredUserName = useRef();
	const enteredUserAge = useRef();
	const [error, setError] = useState();

	const submitFormHandler = (event) => {
		event.preventDefault();

		if (
			enteredUserAge.current.value === '' ||
			enteredUserName.current.value === ''
		) {
			setError({
				title: 'Empty fields not allowed',
				message: 'Please fill up both username and age',
			});
			return;
		}
		if (
			enteredUserAge.current.value <= 0 ||
			enteredUserAge.current.value > 100
		) {
			//plussign convert string to number in react js
			setError({
				title: 'wrong age entered',
				message: 'Enter age above 0 and less than 100',
			});
			enteredUserAge.current.value = '';
			return;
		}
		props.formInput(
			enteredUserName.current.value,
			enteredUserAge.current.value
		);
		enteredUserAge.current.value = '';
		enteredUserName.current.value = '';
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
						<input id='username' type='text' ref={enteredUserName} />
						<label> Age </label>
						<input id='age' type='number' ref={enteredUserAge} />
						<Button type='button' onClick={submitFormHandler}>
							Submit
						</Button>
					</div>
				</form>
			</Card>
		</div>
	);
};

export default FormInput;
