import { useEffect, useState } from 'react';
import MealItem from './MealItem';

export default function Meals() {
	const [loadedMeals, setLoadedMeals] = useState([]);

	useEffect(() => {
		async function fetchMeals() {
			const response = await fetch('http://localhost:3000/meals');
			if (!response.ok) {
			}

			const meals = await response.json();
			setLoadedMeals(meals);
		}
		fetchMeals();
	}, []);

	return (
		<ul id='meals'>
			{loadedMeals.map((item) => (
				<MealItem key={item.id} meal={item} />
			))}
		</ul>
	);
}
