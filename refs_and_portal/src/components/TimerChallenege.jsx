import PropTypes from 'prop-types';
import { useRef, useState } from 'react';
import ResultModal from './ResultModel.jsx';

TimerChallegerFunction.propTypes = {
	title: PropTypes.string.isRequired,
	targetTime: PropTypes.number.isRequired,
};

export default function TimerChallegerFunction({ title, targetTime }) {
	const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

	const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

	const timer = useRef();
	const dialog = useRef();

	//lost condition - stopping automatically
	if (timeRemaining <= 0) {
		clearInterval(timer.current);
		dialog.current.open();
	}

	const handleReset = () => {
		setTimeRemaining(targetTime * 1000);
	};

	const handleStart = () => {
		timer.current = setInterval(() => {
			setTimeRemaining((previousValue) => previousValue - 10);
		}, 10);
	};

	//this is stopping manually
	const handleStop = () => {
		clearInterval(timer.current);
		dialog.current.open();
	};

	return (
		<>
			<ResultModal
				ref={dialog}
				targetTime={targetTime}
				remainingTime={timeRemaining}
				resetTime={handleReset}
			/>
			<section className='challenge'>
				<h2>{title}</h2>
				<p className='challenge-time'>
					{targetTime} second{targetTime > 1 && 's'}
				</p>
				<button onClick={timerIsActive ? handleStop : handleStart}>
					{!timerIsActive ? 'Start Timer' : 'Stop Timer'}
				</button>
				<p className={timerIsActive ? 'active' : undefined}>
					{timerIsActive ? 'Timer Running...' : 'Not started...'}
				</p>
			</section>
		</>
	);
}
