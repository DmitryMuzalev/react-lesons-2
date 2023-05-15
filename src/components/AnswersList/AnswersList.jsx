import AnswerItem from './AnswerItem/AnswerItem';
import styles from './AnswersList.module.css';

export default function AnswersList({ answers }) {
  return (
    <ul className={styles.answerList}>
      {answers.map((answer, index) => {
        return <AnswerItem answer={answer} key={index} />;
      })}
    </ul>
  );
}
