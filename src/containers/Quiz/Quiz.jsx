import { Component } from 'react';
import styles from './Quiz.module.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';

export default class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeQuestion: 0,
      quiz: [
        {
          id: 1,
          rightAnswerId: 2,
          question: 'Вопрос номер 1?',
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
        {
          id: 3,
          rightAnswerId: 1,
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
        {
          id: 2,
          rightAnswerId: 4,
          question: 'Вопрос номер 3?',
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
    this.setState({ activeQuestion: this.state.activeQuestion + 1 });
  };

  render() {
    return (
      <div className={styles.quiz}>
        <div className={styles.quiz__wrapper}>
          <h1>Ответьте на все вопросы</h1>
          <ActiveQuiz
            answers={this.state.quiz[this.state.activeQuestion].answers}
            question={this.state.quiz[this.state.activeQuestion].question}
            onAnswerClick={this.onAnswerClick}
            quizLength={this.state.quiz.length}
            answerNumber={this.state.activeQuestion + 1}
          />
        </div>
      </div>
    );
  }
}
