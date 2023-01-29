import React from 'react';
import styles from './Button.module.css'; //importing as module --> styles will act as a object to all the classes present inside the css file

const Button = (props) => {
	return (
		<button type={props.type} className={styles.button} onClick={props.onClick}>
			{props.children}
		</button>
	);
};

export default Button;
