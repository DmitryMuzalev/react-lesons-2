import { Component } from 'react';
import styles from './NavigationMenu.module.css';
import Backdrop from '../../Backdrop/Backdrop';

export default class NavigationMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [1, 2, 3],
    };
  }

  renderLinks = () => {
    const links = this.state.links;
    return links.map((link, index) => {
      return (
        <li key={index}>
          <a href="#link" className={styles.navigationMenu__link}>
            Link {link}
          </a>
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
