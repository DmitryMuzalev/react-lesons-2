import AnswerItem from './AnswerItem/AnswerItem';
import styles from './AnswersList.module.css';

export default function AnswersList({ answers, onAnswerClick }) {
  return (
    <ul className={styles.answerList}>
      {answers.map((answer, index) => {
        return (
          <AnswerItem
            answer={answer}
            key={index}
            onAnswerClick={onAnswerClick}
          />
        );
      })}
    </ul>
  );
}
