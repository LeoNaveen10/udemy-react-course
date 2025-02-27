import { useState } from 'react';
import GameBoard from './components/GameBoard';
import Player from './components/Player';
import Log from './components/Log';
import { WINNING_COMBINATIONS } from './winning-combinations';
import GameOver from './components/GameOver';

const PLAYERS = {
	X : 'player1',
	O : 'player2'
}
const INITIAL_GAME_BOARD = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
];

function deriveActivePlayer(gameBoard) {
	let tempPlayer = 'X';

	if (gameBoard.length > 0 && gameBoard[0].player == 'X') tempPlayer = 'O';
	return tempPlayer;
}

function deriveWinner(gameBoardTemp, playerName){
let winner;
	for (const combination of WINNING_COMBINATIONS) {
		const firstSymbol =
			gameBoardTemp[combination[0].row][combination[0].column];
		const secondSymbol =
			gameBoardTemp[combination[1].row][combination[1].column];
		const thirdSymbol =
			gameBoardTemp[combination[2].row][combination[2].column];

			console.log(firstSymbol, secondSymbol, thirdSymbol);
		if (
			firstSymbol &&
			firstSymbol == secondSymbol &&
			firstSymbol == thirdSymbol
		)
			winner = `${playerName[firstSymbol]} won`;
	}
	return winner;
}

function deriveGameBoard(gameBoard){
	let gameBoardTemp = [...INITIAL_GAME_BOARD.map((array) => [...array])];
	for (const turn of gameBoard) {
		const { turnIndex, player } = turn;
		gameBoardTemp[turnIndex.row][turnIndex.col] = player;
	}
return gameBoardTemp;
}

function App() {
	// const [activePlayer, setActivePlayer] = useState('X');
	const [gameBoard, setGameBoard] = useState([]);
	const [playerName, setPlayerName] = useState(PLAYERS)
	let activePlayer = deriveActivePlayer(gameBoard);
	const gameBoardTemp = deriveGameBoard(gameBoard);
	const winner = deriveWinner(gameBoardTemp, playerName);

	let hasDraw = gameBoard.length == 9 && !winner;

	function switchActivePlayer(rowIndex, colIndex) {
		setGameBoard((prevValue) => {
			//using temp player coz we are making sure that this value
			//will always have the updated values
			const tempPlayer = deriveActivePlayer(prevValue);

			const updatedBoard = [
				{ turnIndex: { row: rowIndex, col: colIndex }, player: tempPlayer },
				...prevValue,
			];
			return updatedBoard;
		});
	}

	function restartMatch() {
		setGameBoard([]);
	}

	function handlePlayerNameChange(symbol, newName) {
		setPlayerName(prevPlayerName => {
			return {
				...prevPlayerName,
				[symbol] : newName
			}
		})
	}

	return (
		<main>
			<div id='game-container'>
				<ol id='players' className='highlight-player'>
					<Player
						initialName= {PLAYERS.X}
						Symbol='X'
						isActive={activePlayer == 'X'}
						onPlayerNameChange = {handlePlayerNameChange}
					/>
					<Player
						initialName={PLAYERS.O}
						Symbol='O'
						isActive={activePlayer == 'O'}
						onPlayerNameChange = {handlePlayerNameChange}
					/>
				</ol>
				{(winner || hasDraw) && (
					<GameOver winner={winner} restartMatch={restartMatch} />
				)}
				<GameBoard switchPlayer={switchActivePlayer} turns={gameBoardTemp} />
			</div>
			<Log turns={gameBoard} />
		</main>
	);
}

export default App;
