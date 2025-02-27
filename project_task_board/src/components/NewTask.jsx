import { useState } from 'react';

export default function NewTask({onAdd}) {
	const [enteredTask, setEnteredTask] = useState();

	function handleChange(event) {
		setEnteredTask(event.target.value);
	}

    function handleClick(){
        //forward the entered value to the app component
        onAdd(enteredTask);
        setEnteredTask('');
    }

	return (
		<div className='flex items-center gap-4 '>
			<input
				type='text'
				className='w-64 px-2 py-1 rounded-sm bg-stone-200'
				onChange={handleChange}
				value={enteredTask}
                onKeyDown={(e)=>{
                    if(e.key == 'Enter')
                        handleClick()
                }}
			/>
			<button className='text-stone-700 hover:text-stone-950 rounded-md bg-stone-300'
            onClick={handleClick}
            >
				Add Task
			</button>
		</div>
	);
}
