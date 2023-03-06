import React, { useState, useEffect, useReducer, useRef } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';

//state holds previous values and action holds the presently sent value
const emailReducer = (state, action) => {
	if (action.type === 'USER_INPUT')
		return { value: action.val, isValid: action.val.includes('@') };
	if (action.type === 'BLUR_INPUT')
		return { value: state.value, isValid: state.value.includes('@') };
	return { value: '', isValid: false };
};

const passwordAction = (state, action) => {
	console.log('coming inside password actiion?', action.val);
	if (action.type === 'USER_INPUT')
		return { value: action.val, isValid: action.val.trim().length > 6 };
	if (action.type === 'BLUR_INPUT')
		return { value: state.value, isValid: state.value.trim().length > 6 };
	return { value: '', isValid: false };
};

const Login = (props) => {
	// const [enteredEmail, setEnteredEmail] = useState('');
	// const [emailIsValid, setEmailIsValid] = useState();
	// const [enteredPassword, setEnteredPassword] = useState('');
	// const [passwordIsValid, setPasswordIsValid] = useState();
	const [formIsValid, setFormIsValid] = useState(false);
	const emailInputRef = useRef();
	const passwordInputRef = useRef();

	const [emailState, dispathEmail] = useReducer(emailReducer, {
		value: '',
		isValid: false,
	});

	const [passwordState, dispathPassword] = useReducer(passwordAction, {
		value: '',
		isValid: false,
	});

	//object destructring to achieve the rendering only for the particular state changes inside the object
	const { isValid: emailIsValid } = emailState;
	const { isValid: passwordIsValid } = passwordState;

	/**
	 * so everytime enteredEmail/ enteredPassword changes, useEffect will run.
	 * debouncing technique is used here - instead of making the statements inside the useEffect run everytime for
	 *                                     each keystroke, we run only after 1sec of inactiviy.
	 * return inside useEffect is used to clear the timer to start a new timer.
	 */

	//setFormValid is moved into useEffect to test only when emailIsvalid/passwordIsValid changes
	useEffect(() => {
		const timerId = setTimeout(() => {
			setFormIsValid(emailIsValid && passwordIsValid);
		}, 1000);

		return () => {
			clearTimeout(timerId);
			console.log(timerId, ' : timer cleared');
		};
	}, [emailIsValid, passwordIsValid]);

	const emailChangeHandler = (event) => {
		dispathEmail({ type: 'USER_INPUT', val: event.target.value });
		// setEnteredEmail(event.target.value);
		// setFormIsValid(
		// 	emailState.value.includes('@') && passwordState.value.trim().length > 6
		// );
	};

	const passwordChangeHandler = (event) => {
		// setEnteredPassword(event.target.value);
		dispathPassword({ type: 'USER_INPUT', val: event.target.value });
		// setFormIsValid(
		// 	emailState.value.includes('@') && passwordState.value.trim().length > 6
		// );
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
		if (formIsValid) {
			props.onLogin(emailState.value, passwordState.value);
		} else if (!emailIsValid) {
			emailInputRef.current.focus();
		} else {
			passwordInputRef.current.focus();
		}
	};

	return (
		<Card className={classes.login}>
			<form onSubmit={submitHandler}>
				<Input
					ref={emailInputRef}
					label='email'
					type='email'
					id='E-mail'
					value={emailState.value}
					onChange={emailChangeHandler}
					onBlur={validateEmailHandler}
					isValid={emailIsValid}
				></Input>
				<Input
					ref={passwordInputRef}
					label='password'
					type='password'
					id='Pass-word'
					value={passwordState.value}
					onChange={passwordChangeHandler}
					onBlur={validatePasswordHandler}
					isValid={passwordIsValid}
				></Input>
				<div className={classes.actions}>
					<Button type='submit' className={classes.btn}>
						Login
					</Button>
				</div>
			</form>
		</Card>
	);
};

export default Login;
