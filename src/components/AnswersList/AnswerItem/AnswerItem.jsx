import styles from './AnswerItem.module.css';

export default function AnswerItem({ answer, onAnswerClick, answerState }) {
  const styleClasses = [styles.answerItems];
  if (styleClasses) {
    styleClasses.push(styles[answerState]);
  }
  return (
    <li
      className={styleClasses.join(' ').trim()}
      onClick={() => {
        onAnswerClick(answer.id);
      }}
    >
      {answer.text}
    </li>
  );
}
