import Button from '../UI/Button/Button';
import styles from './ResultQuiz.module.css';
export default function ResultQuiz({ results, quiz, onResetQuiz }) {
  const successAnswer = Object.values(results).filter(
    (r) => r !== 'error'
  ).length;

  return (
    <div className={styles.result}>
      <ul>
        {quiz.map((itemQuiz, index) => {
          const iconClasses = [
            'fa',
            results[itemQuiz.id] === 'error' ? 'fa-times' : 'fa-check',
            styles[results[itemQuiz.id]],
          ];
          return (
            <li key={index}>
              <strong>{`${itemQuiz.id}. `}</strong>
              {itemQuiz.question}

              <i className={iconClasses.join(' ')} />
            </li>
          );
        })}
      </ul>
      <p>
        Результат теста: {successAnswer} из {quiz.length}
      </p>

      <Button onClick={onResetQuiz} type="primary">
        Пройти тест ещё раз
      </Button>

      <Button type="success">Меню</Button>
    </div>
  );
}
