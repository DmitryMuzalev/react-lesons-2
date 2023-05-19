import styles from './Backdrop.module.css';
export default function Backdrop({ onCloseMenu }) {
  return <div className={styles.backdrop} onClick={onCloseMenu}></div>;
}
