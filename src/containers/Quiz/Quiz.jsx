import { Component } from 'react';
import styles from './Quiz.module.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';

export default class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quiz: [
        {
          rightAnswerId: 2,
          question: 'Вопрос номер 2?',
          answers: [
            {
              text: 'Ответ 1',
              id: 1,
            },
            {
              text: 'Ответ 2',
              id: 2,
            },
            {
              text: 'Ответ 3',
              id: 3,
            },
            {
              text: 'Ответ 4',
              id: 4,
            },
          ],
        },
      ],
    };
  }

  onAnswerClick = (answerId) => {
    console.log(answerId);
  };

  render() {
    return (
      <div className={styles.quiz}>
        <div className={styles.quiz__wrapper}>
          <h1>Ответьте на все вопросы</h1>
          <ActiveQuiz
            answers={this.state.quiz[0].answers}
            question={this.state.quiz[0].question}
            onAnswerClick={this.onAnswerClick}
          />
        </div>
      </div>
    );
  }
}
