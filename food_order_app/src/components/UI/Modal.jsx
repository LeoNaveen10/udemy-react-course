import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

export default function Modal({ children, open, onClose, className = '' }) {
	const dialog = useRef();

	console.log(`isopen - ${open}`);
	useEffect(() => {
		const modal = dialog.current;

		const handleBackDropClick = (event) => {
			if (event.target == modal) {
				onClose();
			}
		};

		if (open) {
			modal.showModal();
			modal.addEventListener('click', handleBackDropClick);
		}
		return () => modal.close();
	}, [open]);

	return createPortal(
		<dialog ref={dialog} className={`modal ${className}`} onClose={onClose}>
			{children}
		</dialog>,
		document.getElementById('modal')
	);
}
