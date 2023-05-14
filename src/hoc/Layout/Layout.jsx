import styles from './Layout.module.css';
import { Component } from 'react';

export default class Layout extends Component {
  render() {
    return (
      <div className={styles.layout}>
        <main>{this.props.children}</main>
      </div>
    );
  }
}
