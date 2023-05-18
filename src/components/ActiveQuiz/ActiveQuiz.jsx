import AnswersList from '../AnswersList/AnswersList';
import styles from './ActiveQuiz.module.css';
export default function ActiveQuiz({
  answers,
  question,
  onAnswerClick,
  quizLength,
  answerNumber,
  answerState,
}) {
  return (
    <div className={styles.activeQuiz}>
      <p className={styles.question}>
        <span>
          <strong>{answerNumber}.</strong>&nbsp; {question}
        </span>
        <small>
          {answerNumber} из {quizLength}
        </small>
      </p>
      <AnswersList
        answers={answers}
        onAnswerClick={onAnswerClick}
        answerState={answerState}
      />
    </div>
  );
}
