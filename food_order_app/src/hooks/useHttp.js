import { useCallback, useEffect, useState } from 'react';

async function sendHttpRequest(url, config) {
	const response = await fetch(url, config);

	const resData = await response.json();

	if (!response.ok) {
		throw new Error(resData.message || 'Something went wrong');
	}
	return resData;
}

export default function useHttp(url, config, initialData) {
	const [error, setError] = useState();
	const [isLoading, setIsLoading] = useState(false);
	const [data, setData] = useState(initialData);

	function clearData(){
		setData(initialData)
	}

	// Without useCallback, a new function would be created on every render
	// This would cause the useEffect to run on every render, creating an infinite loop
	// useCallback ensures the function reference stays the same between renders
	const sendRequest = useCallback(
		async function sendRequest(data) {
			setIsLoading(true);
			try {
				const resData = await sendHttpRequest(url, { ...config, body: data });
				setData(resData);
			} catch (error) {
				setError(error.message || 'Something went wrong');
			}
			setIsLoading(false);
		},
		[url, config]
	);

	// useEffect is needed to automatically fetch data when the component mounts
	// or when url/config changes. Without it, GET requests would need manual triggering
	// It only runs for GET requests since other methods shouldn't auto-execute
	useEffect(() => {
		if ((config && (config.method === 'GET' || !config.method)) || !config) {
			sendRequest();
		}
	}, [sendRequest, config]);

	return {
		data,
		isLoading,
		error,
		sendRequest,
		clearData
	};
}
