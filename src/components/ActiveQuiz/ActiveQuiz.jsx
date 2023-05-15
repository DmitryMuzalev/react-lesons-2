import styles from './ActiveQuiz.module.css';
export default function ActiveQuiz() {
  return (
    <div className={styles.activeQuiz}>
      <p className={styles.question}>
        <span>
          <strong>2.</strong>&nbsp; Вопрос номер 2?
        </span>
        <small>2 из 10</small>
      </p>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </ul>
    </div>
  );
}
