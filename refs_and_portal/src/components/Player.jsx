import { useRef, useState } from 'react';

export default function Player() {
	const playerNameRef = useRef();
	const [player, setPlayer] = useState(null);


	return (
		<section id='player'>
			<h2>Welcome {player ?? 'Unknown Entity'} player</h2>
			<p>
				<input ref={playerNameRef} type='text' />
				<button onClick={()=>setPlayer(playerNameRef.current.value)}>
					Set Name
				</button>
			</p>
		</section>
	);
}
