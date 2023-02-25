import React, { useState, Fragment } from 'react';
import FormInput from './components/AddUser.js';
import './index.css';
import UserList from './components/UsersList.js';

function App() {
	let [receivedInputs, setReceivedInputs] = useState([]);

	const formInputReceived = (name, age) => {
		console.log(`name and age received is: ${name}, ${age}`);
		setReceivedInputs((prevState) => {
			//whenever we use a list, use this setup to get the previous value unaltered
			return [
				...prevState,
				{ id: Math.random().toString(), name: name, age: age },
			];
		});
	};
	return (
		//fragment is used to render components without any extra div (<> </>) this can also be used flawlessly
		//fragment removed un-necessary html elements
		<Fragment>
			<FormInput formInput={formInputReceived} />
			<UserList users={receivedInputs} />
		</Fragment>
	);
}

export default App;
