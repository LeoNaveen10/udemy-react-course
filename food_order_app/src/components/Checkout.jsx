import { useContext, useActionState } from 'react';
import Modal from './UI/Modal';
import CartContext from '../store/CartContext';
import { currencyFormatter } from '../util/formatting';
import Input from './UI/Input';
import Button from './UI/Buttons';
import UserProgressContext from '../store/UserProgressContext';
import useHttp from '../hooks/useHttp';
import Error from './Error';

const requestConfig = {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json',
	},
};

export default function Checkout() {
	const cartCtx = useContext(CartContext);
	const userProgressCtx = useContext(UserProgressContext);

	const { data, error, sendRequest, clearData } = useHttp(
		'http://localhost:3000/orders',
		requestConfig
	);

	const totalPrice = cartCtx.items.reduce(
		(initalValue, item) => initalValue + item.price * item.quantity,
		0
	);

	async function checkoutActions(prevState, fd) {
		const customerData = Object.fromEntries(fd.entries());

		await sendRequest(
			JSON.stringify({
				order: {
					items: cartCtx.items,
					customer: customerData,
				},
			})
		);
	}

	const [formState, formAction, isSending] = useActionState(
		checkoutActions,
		null
	);

	function handleFinish() {
		userProgressCtx.hideCheckout();
		cartCtx.clearCart();
		clearData();
	}

	let actions = (
		<>
			<Button
				textOnly
				type='button'
				onClick={() => userProgressCtx.hideCheckout()}
			>
				Close
			</Button>
			<Button> Submit Order </Button>
		</>
	);

	if (isSending) {
		actions = <span>Sending order Data ...</span>;
	}

	if (data && !error) {
		return (
			<Modal
				open={userProgressCtx.progress === 'checkout'}
				onClose={handleFinish}
			>
				<h2>Success!</h2>
				<p>Your order was submitted successfully.</p>
				<p>
					We will get back to you with more details via email within next few
					minutes.
				</p>

				<p className='modal-actions'>
					<Button>Okay</Button>
				</p>
			</Modal>
		);
	}

	return (
		<Modal
			open={userProgressCtx.progress === 'checkout'}
			onClose={() => userProgressCtx.hideCheckout()}
		>
			<form action={formAction}>
				<h2> Checkout</h2>
				<p>Total Amount: {currencyFormatter.format(totalPrice)}</p>
				<Input label='Full  Name' type='text' id='name' />
				<Input label='E-mail Address' type='email' id='email' />
				<Input label='Street' type='text' id='street' />
				<div className='control-row'>
					<Input label='Postal Code' type='text' id='postal-code' />
					<Input label='City' type='text' id='city' />
				</div>
				{error && <Error title='failed to submit order' message={error} />}
				<p className='modal-actions'>{actions}</p>
			</form>
		</Modal>
	);
}
