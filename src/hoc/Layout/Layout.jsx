import MenuButton from '../../components/UI/Navigation/MenuButton/MenuButton';
import NavigationMenu from '../../components/UI/Navigation/NavigationMenu/NavigationMenu';
import styles from './Layout.module.css';
import { Component } from 'react';

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
        <main>{this.props.children}</main>
      </div>
    );
  }
}
