import { Component } from 'react';
import styles from './Quiz.module.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';

export default class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quiz: [
        {
          answers: [
            {
              text: 'Ответ 1',
            },
            {
              text: 'Ответ 2',
            },
            {
              text: 'Ответ 3',
            },
            {
              text: 'Ответ 4',
            },
          ],
        },
      ],
    };
  }
  render() {
    return (
      <div className={styles.quiz}>
        <div className={styles.quiz__wrapper}>
          <h1>Ответьте на все вопросы</h1>
          <ActiveQuiz answers={this.state.quiz[0].answers} />
        </div>
      </div>
    );
  }
}
