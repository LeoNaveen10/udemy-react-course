import React from 'react';
import classes from './UsersList.module.css';
import Card from './UI/Card';

const UserList = (props) => {
	console.log(`props received is ${props.users}`);
	return (
		<Card className={classes.users}>
			<ul>
				{props.users.map((element) => (
					<li key={element.id}>
						{element.name} ({element.age}) years old
					</li>
				))}
			</ul>
		</Card>
	);
};

export default UserList;
