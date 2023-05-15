import AnswersList from '../AnswersList/AnswersList';
import styles from './ActiveQuiz.module.css';
export default function ActiveQuiz({ answers, question, onAnswerClick }) {
  return (
    <div className={styles.activeQuiz}>
      <p className={styles.question}>
        <span>
          <strong>2.</strong>&nbsp; {question}
        </span>
        <small>2 из 10</small>
      </p>
      <AnswersList answers={answers} onAnswerClick={onAnswerClick} />
    </div>
  );
}
