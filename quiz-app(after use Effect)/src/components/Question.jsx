import { useState } from 'react';
import Answers from './Answers';
import QuestionTimer from './QuestionTimer';
import questions from '../questions.js';

export default function Question({
	questionIndex,
	handleSelectAnswer,
	handleSkipAnswer,
}) {
	const [answer, setAnswer] = useState({
		selectedAnswer: '',
		isCorrect: null,
	});

	let timer = 10000;
	if (answer.selectedAnswer) {
		timer = 1000;
	}
	if (answer.isCorrect !== null) {
		timer = 2000;
	}

	function handleSelectAnswerInternal(answer) {
		setAnswer({
			selectedAnswer: answer,
			isCorrect: null, //set to null to delay the results
		});

		setTimeout(() => {
			setAnswer({
				selectedAnswer: answer,
				isCorrect: questions[questionIndex].answers[0] === answer,
			});

			setTimeout(() => {
				handleSelectAnswer(answer);
			}, 2000);
		}, 1000);
	}

	let answerState = '';
	if (answer.selectedAnswer && answer.isCorrect !== null) {
		answerState = answer.isCorrect ? 'correct' : 'wrong';
	} else if (answer.selectedAnswer) {
		answerState = 'answered';
	}

	return (
		<div id='question'>
			<QuestionTimer
				timeout={timer}
				onTimeout={answer.selectedAnswer === '' ? handleSkipAnswer : null}
				mode={answerState}
			/>
			<h2>{questions[questionIndex].text}</h2>
			<Answers
				answers={questions[questionIndex].answers}
				selectedAnswer={answer.selectedAnswer}
				answerState={answerState}
				onSelect={handleSelectAnswerInternal}
			/>
		</div>
	);
}
