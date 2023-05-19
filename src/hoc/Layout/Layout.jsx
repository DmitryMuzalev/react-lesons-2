import MenuButton from '../../components/UI/Navigation/MenuButton';
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
    console.log('Click Btn');
    this.setState({
      isOpenMenu: !this.state.isOpenMenu,
    });
  };

  render() {
    return (
      <div className={styles.layout}>
        <MenuButton
          onToggleMenu={this.onToggleMenu}
          isOpenMenu={this.state.isOpenMenu}
        />
        <main>{this.props.children}</main>
      </div>
    );
  }
}
