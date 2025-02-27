import React, { useState } from 'react';
import './DisplayValues.css';

const DisplayValues = (props) => {
	console.log('comingh ere?');
	function consoleOutput(name, age) {
		console.log(`values recevied is: ${name}, ${age}`);
	}
	return (
		<li>
			{consoleOutput(props.name, props.age)}
			<div>
				<h2>{props.name}</h2>
				<h4>{props.age}</h4>
			</div>
		</li>
	);
};

export default DisplayValues;
