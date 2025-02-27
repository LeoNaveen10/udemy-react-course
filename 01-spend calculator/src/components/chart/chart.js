import React from 'react';
import './chart.css';
import ChartBar from './chartBar';

const ChartVisuals = (props) => {
	const valuesInDataPoints = props.dataPoints.map((data) => data.value);
	const maximumValue = Math.max(...valuesInDataPoints);

	return (
		<div className='chart'>
			{props.dataPoints.map((datapoint) => (
				<ChartBar
					key={datapoint.month}
					value={datapoint.value}
					maxValue={maximumValue}
					month={datapoint.month}
				/>
			))}
		</div>
	);
};

export default ChartVisuals;
