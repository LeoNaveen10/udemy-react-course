import React from 'react';
import classes from './ErrorModel.module.css';
import Card from './Card';
import Button from './Button';

const ErrorModel = (props) => {
	return (
		<div>
			<div className={classes.backdrop} onClick={props.okayHandler} />
			<Card className={classes.modal}>
				<header className={classes.header}>
					<h2>{props.error.title}</h2>
				</header>
				<div className={classes.content}>
					<p>{props.error.message}</p>
				</div>
				<footer className={classes.actions}>
					<Button onClick={props.okayHandler}>Okay</Button>
				</footer>
			</Card>
		</div>
	);
};

export default ErrorModel;
