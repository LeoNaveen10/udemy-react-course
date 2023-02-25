import React, { useState } from 'react';
import FormInput from './components/AddUser.js';
import './index.css';
import UserList from './components/UsersList.js';

function App() {
	let [receivedInputs, setReceivedInputs] = useState([]);

	const formInputReceived = (name, age) => {
		setReceivedInputs((prevState) => {
			//whenever we use a list, use this setup to get the previous value unaltered
			return [
				...prevState,
				{ id: Math.random().toString(), name: name, age: age },
			];
		});
	};
	return (
		<div>
			<FormInput formInput={formInputReceived} />
			<UserList users={receivedInputs} />
		</div>
	);
}

export default App;
