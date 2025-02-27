import logo from './assets/logo.png';
import UserInput from './components/UserInput';

function App() {
	return (
		<div id='header'>
			<img src={logo} width='100' height='100' />
			<h1>React Investment Calculator</h1>
			<UserInput />
		</div>
	);
}

export default App;
