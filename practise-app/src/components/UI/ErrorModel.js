import React from 'react';
import classes from './ErrorModel.module.css';
import Card from './Card';
import Button from './Button';
import Wrapper from '../Helpers/Wrapper';
import ReactDOM from 'react-dom';

/**
 * wrapper - is like getting the un-necessary html elements out of the applicaiton.
 * portal - is like giving all the commonly used elements such as navbar, buttons, card etc., move stright to the root element.(below the root element)
 */
const ErrorModel = (props) => {
	const BackDrop = (props) => {
		return <div className={classes.backdrop} onClick={props.okayHandler} />;
	};

	const OverLay = (props) => {
		return (
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
		);
	};
	return (
		<Wrapper>
			{ReactDOM.createPortal(
				<BackDrop okayHandler={props.okayHandler} />,
				document.getElementById('backdrop-root')
			)}
			{ReactDOM.createPortal(
				<OverLay error={props.error} okayHandler={props.okayHandler} />,
				document.getElementById('overlay-root')
			)}
		</Wrapper>
	);
};

export default ErrorModel;
