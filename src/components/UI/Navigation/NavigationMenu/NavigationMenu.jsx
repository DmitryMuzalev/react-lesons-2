import { Component } from 'react';
import styles from './NavigationMenu.module.css';
import Backdrop from '../../Backdrop/Backdrop';
import { NavLink } from 'react-router-dom';

export default class NavigationMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [
        { label: 'Авторизация', path: '/auth' },
        { label: 'Главня', path: '/' },
        { label: 'Список тестов', path: '/quiz-list' },
        { label: 'Создать тест', path: '/quiz-creator' },
      ],
    };
  }

  renderLinks = () => {
    const links = this.state.links;
    return links.map((link, index) => {
      return (
        <li key={index}>
          <NavLink
            to={link.path}
            className={styles.navigationMenu__link}
            onClick={this.props.onCloseMenu}
          >
            {link.label}
          </NavLink>
        </li>
      );
    });
  };

  render() {
    const allStyles = [
      styles.navigationMenu,
      !this.props.isOpenMenu ? styles.closed : null,
    ]
      .join(' ')
      .trim();
    return (
      <>
        <nav className={allStyles}>
          <ul>{this.renderLinks()}</ul>
        </nav>
        {this.props.isOpenMenu ? (
          <Backdrop onCloseMenu={this.props.onCloseMenu} />
        ) : null}
      </>
    );
  }
}
