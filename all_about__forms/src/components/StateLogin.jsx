import { useRef, useState } from 'react';
import Input from './Input';
import { useInput } from '../hooks/useInput';
import { hasMinLength, isEmail, isNotEmpty } from '../util/validation';

export default function StateLogin() {
	const {
		value: emailValue,
		handleChange: handleEmailChange,
		handleInputBlur: handleEmailBlur,
        hasError: emailIsInvalid
	} = useInput('', (value)=> isEmail(value) && isNotEmpty(value));
    const {
		value: passwordValue,
		handleChange: handlePasswordChange,
		handleInputBlur: handlePasswordBlur,
        hasError: passwordIsInvalid
	} = useInput('',(value)=> hasMinLength(value,6));


	function handleSubmit(event) {
		event.preventDefault();
        if(emailIsInvalid || passwordIsInvalid){
            return;
        }
		console.log(emailValue, passwordValue);
	}

	return (
		<form onSubmit={handleSubmit}>
			<h2>Login</h2>
			<div className='control-row'>
				<Input
					id='email'
					type='email'
					name='email'
					label='email'
					onBlur={handleEmailBlur}
					value={emailValue}
					onChange={handleEmailChange}
					error={emailIsInvalid && 'please enter an valid email address'}
				/>

				<Input
					id='password'
					type='password'
					name='password'
					label='Password'
					onBlur={handlePasswordBlur}
					value={passwordValue}
					onChange={handlePasswordChange}
					error={passwordIsInvalid && 'please enter an valid password'}
				/>
			</div>

			<p className='form-actions'>
				<button className='button button-flat'>Reset</button>
				<button className='button'>Login</button>
			</p>
		</form>
	);
}
