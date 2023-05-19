import styles from './MenuButton.module.css';
export default function MenuButton({ onToggleMenu, isOpenMenu }) {
  const allStyles = [
    styles.menuButton,
    'fa',
    isOpenMenu ? `fa-times ${styles.open}` : 'fa-bars',
  ].join(' ');
  return <i onClick={onToggleMenu} className={allStyles} />;
}
