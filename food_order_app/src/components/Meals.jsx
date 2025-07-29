import useHttp from '../hooks/useHttp';
import Error from './Error';
import MealItem from './MealItem';

const requestConfig = {}

export default function Meals() {
	const {
		data: loadedMeals,
		isLoading,	
		error,
	} = useHttp(`http://localhost:3000/meals`, requestConfig, []);

	if (isLoading) {
		return <p className='center'>Fetching meals ....</p>;
	}
	if(error){
		return <Error title='failed to fetch objects' message={error}/>
	}

	return (
		<ul id='meals'>
			{loadedMeals.map((item) => (
				<MealItem key={item.id} meal={item} />
			))}
		</ul>
	);
}
