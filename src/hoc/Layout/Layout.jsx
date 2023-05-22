import { Route, Routes } from 'react-router-dom';
import MenuButton from '../../components/UI/Navigation/MenuButton/MenuButton';
import NavigationMenu from '../../components/UI/Navigation/NavigationMenu/NavigationMenu';
import styles from './Layout.module.css';
import { Component } from 'react';
import HomePage from '../../containers/HomePage/HomePage';
import AuthPage from '../../containers/AuthPage/AuthPage';
import QuizList from '../../containers/QuizList/QuizList';
import QuizCreator from '../../containers/QuizCreator/QuizCreator';
import Quiz from '../../containers/Quiz/Quiz';

export default class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenMenu: false,
    };
  }

  onToggleMenu = () => {
    this.setState({
      isOpenMenu: !this.state.isOpenMenu,
    });
  };

  onCloseMenu = () => {
    this.setState({
      isOpenMenu: false,
    });
  };

  render() {
    return (
      <div className={styles.layout}>
        <MenuButton
          onToggleMenu={this.onToggleMenu}
          isOpenMenu={this.state.isOpenMenu}
        />
        <NavigationMenu
          isOpenMenu={this.state.isOpenMenu}
          onCloseMenu={this.onCloseMenu}
        />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/quiz-list/:quizId" element={<Quiz />} />
            <Route path="/quiz-list" element={<QuizList />} />
            <Route path="/quiz-creator" element={<QuizCreator />} />
          </Routes>
        </main>
      </div>
    );
  }
}
