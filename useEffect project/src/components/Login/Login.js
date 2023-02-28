import React, { useState, useEffect, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

//state holds previous values and action holds the presently sent value
const emailReducer = (state, action) => {
	if (action.type === 'USER_INPUT')
		return { value: action.val, isValid: action.val.includes('@') };
	if (action.type === 'BLUR_INPUT')
		return { value: state.value, isValid: state.value.includes('@') };
	return { value: '', isValid: false };
};

const passwordAction = (state, action) => {
	if (action.type === 'USER_INPUT')
		return { value: action.val, isValid: action.val.trim.length > 6 };
	if (action.type === 'BLUR_INPUT')
		return { value: state.value, isValid: state.value.length > 6 };
	return { value: '', isValid: false };
};

const Login = (props) => {
	// const [enteredEmail, setEnteredEmail] = useState('');
	// const [emailIsValid, setEmailIsValid] = useState();
	// const [enteredPassword, setEnteredPassword] = useState('');
	// const [passwordIsValid, setPasswordIsValid] = useState();
	const [formIsValid, setFormIsValid] = useState(false);

	const [emailState, dispathEmail] = useReducer(emailReducer, {
		value: '',
		isValid: false,
	});

	const [passwordState, dispathPassword] = useReducer(passwordAction, {
		value: '',
		isValid: false,
	});
	/**
	 * so everytime enteredEmail/ enteredPassword changes, useEffect will run.
	 * debouncing technique is used here - instead of making the statements inside the useEffect run everytime for
	 *                                     each keystroke, we run only after 1sec of inactiviy.
	 * return inside useEffect is used to clear the timer to start a new timer.
	 */
	// useEffect(() => {
	// 	const timerId = setTimeout(() => {
	// 		setFormIsValid(
	// 			enteredEmail.includes('@') && enteredPassword.trim().length > 6
	// 		);
	// 	}, 1000);

	// 	return () => {
	// 		clearTimeout(timerId);
	// 		console.log(timerId, ' : timer cleared');
	// 	};
	// }, [enteredEmail, enteredPassword]);

	const emailChangeHandler = (event) => {
		dispathEmail({ type: 'USER_INPUT', val: event.target.value });
		// setEnteredEmail(event.target.value);
		setFormIsValid(
			emailState.value.includes('@') && passwordState.value.trim().length > 6
		);
	};

	const passwordChangeHandler = (event) => {
		// setEnteredPassword(event.target.value);
		dispathPassword({ type: 'USER_INPUT', val: event.target.value });
		setFormIsValid(
			emailState.value.includes('@') && passwordState.value.trim().length > 6
		);
	};

	const validateEmailHandler = () => {
		dispathEmail({ type: 'BLUR_INPUT' });
		// setEmailIsValid(emailState.value.includes('@'));
	};

	const validatePasswordHandler = () => {
		// setPasswordIsValid(passwordState.value.trim().length > 6);
		dispathPassword({ type: 'BLUR_INPUT' });
	};

	const submitHandler = (event) => {
		event.preventDefault();
		props.onLogin(emailState.value, passwordState.value);
	};

	return (
		<Card className={classes.login}>
			<form onSubmit={submitHandler}>
				<div
					className={`${classes.control} ${
						emailState.isValid === false ? classes.invalid : ''
					}`}
				>
					<label htmlFor='email'>E-Mail</label>
					<input
						type='email'
						id='email'
						value={emailState.value}
						onChange={emailChangeHandler}
						onBlur={validateEmailHandler}
					/>
				</div>
				<div
					className={`${classes.control} ${
						passwordState.isValid === false ? classes.invalid : ''
					}`}
				>
					<label htmlFor='password'>Password</label>
					<input
						type='password'
						id='password'
						value={passwordState.value}
						onChange={passwordChangeHandler}
						onBlur={validatePasswordHandler}
					/>
				</div>
				<div className={classes.actions}>
					<Button type='submit' className={classes.btn} disabled={!formIsValid}>
						Login
					</Button>
				</div>
			</form>
		</Card>
	);
};

export default Login;
