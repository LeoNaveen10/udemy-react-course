import { useEffect, useState } from 'react';

export default function ProgressBar({ timer }) {
	const [remainingTime, setRemainingTime] = useState(timer);

	useEffect(() => {
		const timer = setInterval(() => {
			console.log(`timer started - ${remainingTime}`);
			setRemainingTime((prev) => prev - 10);
		}, 10);

		return () => {
			console.log(`timer cleaned up`);
			clearInterval(timer);
		};
	}, []);

	return <progress value={remainingTime} max={timer} />;
}
