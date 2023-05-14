import { Component } from 'react';
import styles from './Quiz.module.css';

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
        <h1>Quiz</h1>
      </div>
    );
  }
}
