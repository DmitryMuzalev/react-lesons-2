import { Component } from 'react';
import styles from './Quiz.module.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import ResultQuiz from '../../components/ResultQuiz/ResultQuiz';

export default class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: {},
      isFinished: false,
      answerState: null,
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
    if (this.state.answerState) {
      const key = [...Object.keys(this.state.answerState)];
      if (this.state.answerState[key] === 'success') return;
    }
    const question = this.state.quiz[this.state.activeQuestion];
    const results = this.state.results;
    if (question.rightAnswerId === answerId) {
      if (!results[question.id]) {
        results[question.id] = 'success';
        this.setState(results);
      }

      this.setState({ answerState: { [answerId]: 'success' } });
      const timeout = setTimeout(() => {
        if (this.isQuizFinished()) {
          this.setState({ isFinished: true });
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null,
          });
        }
        clearTimeout(timeout);
      }, 1000);
    } else {
      results[question.id] = 'error';
      this.setState(results);
      this.setState({ answerState: { [answerId]: 'error' } });
    }
  };

  isQuizFinished = () =>
    this.state.activeQuestion + 1 === this.state.quiz.length;

  onResetQuiz = () => {
    this.setState({
      results: {},
      isFinished: false,
      answerState: null,
      activeQuestion: 0,
    });
  };

  render() {
    return (
      <div className={styles.quiz}>
        <div className={styles.quiz__wrapper}>
          <h1>
            {this.state.isFinished
              ? 'Ваш результат: '
              : 'Ответьте на все вопросы'}
          </h1>
          {this.state.isFinished ? (
            <ResultQuiz
              results={this.state.results}
              quiz={this.state.quiz}
              onResetQuiz={this.onResetQuiz}
            />
          ) : (
            <ActiveQuiz
              answers={this.state.quiz[this.state.activeQuestion].answers}
              question={this.state.quiz[this.state.activeQuestion].question}
              onAnswerClick={this.onAnswerClick}
              quizLength={this.state.quiz.length}
              answerNumber={this.state.activeQuestion + 1}
              answerState={this.state.answerState}
            />
          )}
        </div>
      </div>
    );
  }
}
