import styles from './Button.module.css';

export default function Button({ type, onClick, disabled, children }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={[styles.btn, styles[type]].join(' ')}
    >
      {children}
    </button>
  );
}
