import Cart from './components/Cart';
import Checkout from './components/Checkout';
import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header';
import Meals from './components/Meals';
import { CartContextProvider } from './store/CartContext';
import { UserProgressContextProvider } from './store/UserProgressContext';

function App() {
	return (
		<>
			<ErrorBoundary>
				<UserProgressContextProvider>
					<CartContextProvider>
						<Header />
						<Meals />
						<Cart />
						<Checkout />
					</CartContextProvider>
				</UserProgressContextProvider>
			</ErrorBoundary>
		</>
	);
}

export default App;
