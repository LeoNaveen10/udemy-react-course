import { useContext } from 'react';
import Modal from './UI/Modal';
import CartContext from '../store/CartContext';
import { currencyFormatter } from '../util/formatting';
import Button from './UI/Buttons';
import UserProgressContext from '../store/UserProgressContext';
import CartItem from './CartItems';

export default function Cart() {
	const cartCtx = useContext(CartContext);
	const userProgressCtx = useContext(UserProgressContext);
	const totalPrice = cartCtx.items.reduce(
		(initalValue, item) => initalValue + item.price * item.quantity,
		0
	);

	return (
		//this modal will open only when progress is cart, closed otherwise.
		<Modal
			className='cart'
			open={userProgressCtx.progress === 'cart'} 
			onClose={userProgressCtx.hideCart}
		>
			<h2> Your Cart</h2>
			<ul>
				{cartCtx.items.map((item) => (
					<CartItem
						key={item.id}
						{...item}
						onIncrease={() => cartCtx.addItem(item)}
						onDecrease={() => cartCtx.removeItem(item.id)}
					/>
				))}
			</ul>
			<p className='cart-total'>{currencyFormatter.format(totalPrice)}</p>
			<p className='modal-actions'>
				<Button textOnly onClick={() => userProgressCtx.hideCart()}>
					Close
				</Button>
				<Button
					onClick={() => userProgressCtx.showCheckout()}
					disabled={totalPrice === 0}
				>
					Go to Checkout
				</Button>{' '}
			</p>
		</Modal>
	);
}
