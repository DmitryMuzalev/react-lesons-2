import styles from './ResultQuiz.module.css';
export default function ResultQuiz() {
  return (
    <div className={styles.result}>
      <ul>
        <li>
          <p>
            <strong>1. </strong>Вопрос номер 1?
            <i className={'fa fa-check ' + styles.success} />
          </p>
        </li>
        <li>
          <p>
            <strong>2. </strong>Вопрос номер 2?{' '}
            <i className={'fa fa-times ' + styles.error} />
          </p>
        </li>
      </ul>
      <p>Результат теста: 3 из 10</p>
      <button>Пройти ещё раз</button>
    </div>
  );
}
