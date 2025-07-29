import { createContext, useState } from 'react';

const UserProgressContext = createContext({
	progress: '', //cart or checkout in future,
	showCart: () => {},
	hideCart: () => {},
	showCheckout: () => {},
	hideCheckout: () => {},
});

export function UserProgressContextProvider({ children }) {
	const [userProgress, setUserProgress] = useState('');

	function showCart() {
		setUserProgress('cart');
	}
	function hideCart() {
		console.log(`hide cart triggered`);
		setUserProgress('');
	}
	function showCheckout() {
		setUserProgress('checkout');
	}
	function hideCheckout() {
		setUserProgress('');
	}

	const userProgressCtx = {
		progress: userProgress,
		showCart,
		hideCart,
		showCheckout,
		hideCheckout,
	};

	return (
		<UserProgressContext.Provider value={userProgressCtx}>
			{children}
		</UserProgressContext.Provider>
	);
}

export default UserProgressContext;
