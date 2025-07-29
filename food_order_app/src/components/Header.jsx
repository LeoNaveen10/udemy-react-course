import { useContext } from 'react';
import logo from '../assets/logo.jpg';
import Button from './UI/Buttons';
import CartContext from '../store/CartContext';
import UserProgressContext from '../store/UserProgressContext';

export default function Header() {
	const cartCtx = useContext(CartContext);
	const userProgressCtx = useContext(UserProgressContext);


	const totalCartItems = cartCtx.items.reduce((totalNumber, item) => {
		return totalNumber + item.quantity;
	}, 0);

	function handleShowCart() {
		console.log(`inside the handleShowCart`);
		userProgressCtx.showCart();
	}
	
	return (
		<header id='main-header'>
			<div id='title'>
				<img src={logo} alt='Logo' />
				<h1>Food Order App</h1>
			</div>
			<nav>
				<Button textOnly onClick={handleShowCart}> Cart({totalCartItems})</Button>
			</nav>
		</header>
	);
}
