import { useState } from 'react';

export default function Player({ initialName, Symbol, isActive,onPlayerNameChange }) {
	const [isEditing, setIsEditing] = useState(false);
	const [inputName, setInputName] = useState(initialName);

	const handleEditing = () => {
		setIsEditing((temp) => !temp); //always use function instead of using !isEditing

		if(isEditing){
			onPlayerNameChange(Symbol, inputName)
		}
	};
	return (
		<li className={isActive? 'active': undefined}>
			<span className='player'>
				{!isEditing && <span id='player-name'>{inputName}</span>}
				{isEditing && (
					<form>
						<input
							type='text'
							required
							value={inputName}
							onChange={(e) => {
								setInputName(e.target.value);
							}}
						></input>
					</form>
				)}
				
				<span id='player-symbol'>{Symbol}</span>
			</span>
			<button onClick={handleEditing}>{isEditing ? 'Save' : 'Edit'}</button>
		</li>
	);
}
