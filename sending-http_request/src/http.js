export default async function fetchAvailablePlaces() {
	const response = await fetch('http://localhost:3000/places');
	const resData = await response.json();

	if (!response.ok) {
		throw new Error('Failed to fetch places');
	}
	return resData.places;
}


export async function updateUserPlaces(places){
  const res =  await  fetch('http://localhost:3000/user-places',{
        method : 'put',
        body : JSON.stringify({places}),
        headers : {
            'Content-type' : 'application/json'
        }
    })
    const response = await res.json();
    if(!res.ok){
        throw new Error(`Failed to update places`)
    }
   return response.message;
}

export  async function fetchUserPlaces() {
	const response = await fetch('http://localhost:3000/user-places');
	const resData = await response.json();

	if (!response.ok) {
		throw new Error('Failed to fetch user places');
	}
	return resData.places;
}
