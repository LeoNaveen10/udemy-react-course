import quizCompleteImg from '../assets/quiz-complete.png';
import Questions from '../questions.js';

export default function Summary({ userAnswers }) {
	const result = {
		correct: 0,
		skipped: 0,
		wrong: 0,
	};
	for (const [index, element] of userAnswers.entries()) {
		if (!element) {
			result.skipped += 1;
		} else if (element == Questions[index].answers[0]) {
			result.correct += 1;
		} else {
			result.wrong += 1;
		}
	}

	return (
		<div id='summary'>
			<img src={quizCompleteImg} alt='Trophy icon' />
			<h2>Quiz Completed!</h2>

			<div id='summary-stats'>
				<p>
					<span className='number'>
						{((result.skipped / Questions.length) * 100).toFixed(2)}%
					</span>
					<span className='text'> Skipped</span>
				</p>
				<p>
					<span className='number'>
						{((result.correct / Questions.length) * 100).toFixed(2)}%
					</span>
					<span className='text'> answered correctly</span>
				</p>
				<p>
					<span className='number'>
						{((result.wrong / Questions.length) * 100).toFixed(2)}%
					</span>
					<span className='text'> answered incorrectly</span>
				</p>
			</div>
			<ol>
				{userAnswers.map((answer, index) => {
                    let cssClasses = 'user-answer';
                    if(answer === null){
                        cssClasses +=' skipped'
                    }
                    else if(answer == Questions[index].answers[0]){
                        cssClasses += ' correct'
                    }else{
                        cssClasses += ' wrong'
                    }

					return (
						<li key={index}>
							<h3>{index}</h3>
							<p className='question'>{Questions[index].text}</p>
							<p className={cssClasses}>{answer ?? 'Skipped'}</p>
						</li>
					);
				})}
			</ol>
		</div>
	);
}
