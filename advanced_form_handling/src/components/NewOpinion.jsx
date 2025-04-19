import { useActionState, use } from 'react';
import { OpinionsContext } from '../store/opinions-context';
import {useFormStatus} from 'react-dom';
import Submit from './Submit';

export function NewOpinion() {
	const { addOpinion } = use(OpinionsContext);

	async function opinionAction(prevState, formData) {
		const userName = formData.get('userName');
		const title = formData.get('title');
		const body = formData.get('body');

		const error = [];
		if (title.trim().length < 5) {
			error.push(`Title must be at least 5 characters long`);
		}
		if (!userName.trim() || !title.trim() || !body.trim()) {
			error.push(`All fields are required`);
		}
		if (!error.length) {
			await addOpinion({ title, body, userName });
			return { error, userName: '', title: '', body: '' };
		}
		return {
			error,
			userName,
			title,
			body,
		};
	}

	const [formState, formAction, pending] = useActionState(opinionAction, {
		error: [],
	});
	return (
		<div id='new-opinion'>
			<h2>Share your opinion!</h2>
			<form action={formAction}>
				<div className='control-row'>
					<p className='control'>
						<label htmlFor='userName'>Your Name</label>
						<input
							type='text'
							id='userName'
							name='userName'
							defaultValue={formState.userName}
						/>
					</p>

					<p className='control'>
						<label htmlFor='title'>Title</label>
						<input
							type='text'
							id='title'
							name='title'
							defaultValue={formState.title}
						/>
					</p>
				</div>
				<p className='control'>
					<label htmlFor='body'>Your Opinion</label>
					<textarea
						id='body'
						name='body'
						rows={5}
						defaultValue={formState.body}
					></textarea>
				</p>

				<Submit />

				{formState.error.length > 0 && (
					<ul className='error'>
						{formState.error.map((error) => (
							<li key={error}>{error}</li>
						))}
					</ul>
				)}
			</form>
		</div>
	);
}
