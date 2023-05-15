import styles from './AnswerItem.module.css';

export default function AnswerItem({ answer }) {
  return <li className={styles.answerItems}>{answer.text}</li>;
}
