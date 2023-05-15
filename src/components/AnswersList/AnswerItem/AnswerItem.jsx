import styles from './AnswerItem.module.css';

export default function AnswerItem({ answer, onAnswerClick }) {
  return (
    <li
      className={styles.answerItems}
      onClick={() => {
        onAnswerClick(answer.id);
      }}
    >
      {answer.text}
    </li>
  );
}
