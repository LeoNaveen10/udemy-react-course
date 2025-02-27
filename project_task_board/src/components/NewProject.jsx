import { useRef } from 'react';
import Input from './Input';
import Modal from './Modal.jsx';

export default function NewProject({ handleAddProject, handleCancel }) {
	const title = useRef();
	const description = useRef();
	const dueDate = useRef();
	const modal = useRef();

	function handleSave() {
		const enteredTitle = title.current.value;
		const enteredDescription = description.current.value;
		const enteredDueDate = dueDate.current.value;

		//validation ...
		if (
			enteredTitle.trim() === '>' ||
			enteredDescription.trim() === '' ||
			enteredDueDate.trim() === ''
		) {
			//show the error modal
			modal.current.open();
			return;
		}

		handleAddProject({
			title: enteredTitle,
			description: enteredDescription,
			dueDate: enteredDueDate,
		});
	}

	return (
		<>
			<Modal ref={modal} buttonCaption='Close'>
				<h2 className='text-xl font-bold text-stone-700 mt-4 my-4'>
					Invalid Input
				</h2>
				<p className='text-stone-600 mb-4'>
					Oops.. looks like you haven't added all the values
				</p>
				<p className='text-stone-600 mb-4'>
					Please enter all the values in the form
				</p>
			</Modal>
			<div className='w-[35rem] mt-16'>
				<menu className='flex items-center justify-end gap-4 my-4'>
					<li>
						<button
							className='text-stone-800 hover:text-stone-950'
							onClick={handleCancel}
						>
							Cancel
						</button>
					</li>
					<li>
						<button
							onClick={handleSave}
							className='px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950'
						>
							Save
						</button>
					</li>
				</menu>
				<div>
					<Input ref={title} type='text' label='Title' />
					<Input ref={description} label='Description' isTextArea />
					<Input ref={dueDate} type='date' label='Due Date' />
				</div>
			</div>
		</>
	);
}
