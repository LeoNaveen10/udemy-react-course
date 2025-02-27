import { useImperativeHandle, useRef } from "react";
import {createPortal} from 'react-dom';


export default function ResultModal({ref, targetTime, remainingTime, resetTime }) {

	const result = remainingTime <= 0;
	const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
	const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

	const dialog = useRef();
	useImperativeHandle(ref, () => {
		return {
			open: () => {
				dialog.current.showModal();
			},
		};
	})
	return createPortal(
		<dialog ref={dialog} className="result-modal">
			{result && <h2>You Lost</h2>}
			{!result && <h2>Your Score : {score}</h2>}
			<p>
				the target time was {targetTime} second{targetTime > 1 && 's'}
			</p>
			<p>You stopped the timer with {formattedRemainingTime} seconds left</p>
			<form action='dialog' onSubmit={resetTime}>
				<button>close</button>
			</form>
		</dialog>,
		document.getElementById('modal')
	);
}
