import { useContext } from 'react';
import logo from '../assets/logo.jpg';
import Button from './UI/Buttons';
import CartContext from '../store/CartContext';

export default function Header() {
	const cartCtx = useContext(CartContext);


	const totalCartItems = cartCtx.items.reduce((totalNumber, item) => {
		return totalNumber + item.quantity;
	}, 0);
	
	return (
		<header id='main-header'>
			<div id='title'>
				<img src={logo} alt='Logo' />
				<h1>Food Order App</h1>
			</div>
			<nav>
				<Button textOnly> Cart({totalCartItems})</Button>
			</nav>
		</header>
	);
}
