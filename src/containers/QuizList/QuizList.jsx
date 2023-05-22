import { NavLink } from 'react-router-dom';
import styles from './QuizList.module.css';
import { useState } from 'react';

export default function QuizList() {
  const initialState = [1, 2, 3];
  const [quizListData] = useState(initialState);

  const renderQuizList = quizListData.map((quiz, index) => {
    return (
      <li key={index}>
        <NavLink to={`/quiz-list/${quiz}`}>{`Тест ${quiz}`}</NavLink>
      </li>
    );
  });

  return (
    <div className="container">
      <div className={styles.quizList}>
        <h2>Список тестов</h2>
        <ul className={styles.quizList__list}>{renderQuizList}</ul>
      </div>
    </div>
  );
}
