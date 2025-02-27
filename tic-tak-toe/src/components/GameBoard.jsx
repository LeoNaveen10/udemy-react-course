/**
 * This 2D array is used to dynamically output the user input.
 */

/**
 * ----------General input for future use-----------------
 *
 * we are making copy of the object first before making a change, this is coz objects and arrays are immutable in JS
 * so whenever we want to change the values of objects or array, create a copy first and then change it
 *
 *
 * primitive type(store in stack) vs reference types(store in heap - only pointers to the values are stored in stack)
 *
 * primitive -> numbers, strings, boolean, undefined and null
 * reference -> objects and arrays
 */



export default function GameBoard({ switchPlayer, turns }) {
	//this is called deriving the state from managed state
	//it is always good practice to use as minimum state as possible
	
	function handleButtonClicks(rowIndex, colIndex) {
		//this is used to switching the player, by lifting the state up
		switchPlayer(rowIndex, colIndex);
	}
	return (
		<ol id='game-board'>
			{turns.map(
				(
					row,
					rowIndex //outer array
				) => (
					<li key={rowIndex}>
						<ol>
							{row.map(
								(
									playerChoice,
									colIndex //inner array
								) => (
									<li key={colIndex}>
										<button
											disabled={turns[rowIndex][colIndex] !== null}
											onClick={() => {
												handleButtonClicks(rowIndex, colIndex);
											}}
										>
											{playerChoice}
										</button>
									</li>
								)
							)}
						</ol>
					</li>
				)
			)}
		</ol>
	);
}
