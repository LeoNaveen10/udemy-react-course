import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header';
import Meals from './components/Meals';
import { CartContextProvider } from './store/CartContext';

function App() {
	return (
		<>
			<ErrorBoundary>
				<CartContextProvider>
					<Header />
					<Meals />
				</CartContextProvider>
			</ErrorBoundary>
		</>
	);
}

export default App;
