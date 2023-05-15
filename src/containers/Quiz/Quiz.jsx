import { Component } from 'react';
import styles from './Quiz.module.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';

export default class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quiz: [],
    };
  }
  render() {
    return (
      <div className={styles.quiz}>
        <div className={styles.quiz__wrapper}>
          <h1>Quiz</h1>
          <ActiveQuiz />
        </div>
      </div>
    );
  }
}
