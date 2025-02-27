export default function GameOver({ winner, restartMatch }) {
	return (
		<div id='game-over'>
			<h2>Game Over|</h2>
			<p>{winner && <p>{winner}</p>}</p>
			<p>{!winner && <p>It's a draw</p>}</p>
			<p>
				<button onClick={() => restartMatch()}>Rematch</button>
			</p>
		</div>
	);
}
