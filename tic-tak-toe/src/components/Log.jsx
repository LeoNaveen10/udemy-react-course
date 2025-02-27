export default function Log({ turns }) {
	return (
		<ol id='log'>
			{turns.map((turn) => (
				<li key={`${turn['turnIndex']['row']}${turn['turnIndex']['col']}`}>
					{turn.player} chosen {turn['turnIndex']['row'] + 1} row and{' '}
					{turn['turnIndex']['col'] + 1} column
				</li>
			))}
		</ol>
	);
}
