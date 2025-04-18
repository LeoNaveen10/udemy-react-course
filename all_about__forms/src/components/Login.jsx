import { useRef, useState } from 'react';

export default function Login() {
	const email = useRef();
	const password = useRef();
  const [emailIsInvalid , setEmailIsInvalid] = useState(false);


	function handleSubmit(event) {
		event.preventDefault();
    console.log(email.current.value);
    console.log(password.current.value);

    const emailIsValid = email.current.value.includes('@');
    if(!emailIsValid){
        setEmailIsInvalid(true);
        return;
    }
    setEmailIsInvalid(false);
    console.log('submitted');
	}


	return (
		<form onSubmit={handleSubmit}>
			<h2>Login</h2>
			<div className='control-row'>
				<div className='control no-margin'>
					<label htmlFor='email'>Email</label>
					<input id='email' type='email' name='email' ref={email} />
          {emailIsInvalid && <p> please enter an valid email address</p>}
				</div>

				<div className='control no-margin'>
					<label htmlFor='password'>Password</label>
					<input id='password' type='password' name='password' ref={password} />
				</div>
			</div>

			<p className='form-actions'>
				<button className='button button-flat'>Reset</button>
				<button className='button'>Login</button>
			</p>
		</form>
	);
}
